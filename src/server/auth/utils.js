import _ from 'lodash';
import log from '../logger';
import arboristClient from './arboristClient';
import CodedError from '../utils/error';
import config from '../config';

export const getAccessibleResourcesFromArboristasync = async (jwt) => {
    let data;
    if (config.internalLocalTest) {
        data = {
            resources: [ // these are just for testing
                '/programs/DEV/projects/test',
                '/programs/jnkns/projects/jenkins',
            ],
        };
    } else {
        data = await arboristClient.listAuthorizedResources(jwt);
    }

    log.debug('[authMiddleware] list resources: ', JSON.stringify(data, null, 4));
    if (data && data.error) {
        // if user is not in arborist db, assume has no access to any
        if (data.error.code === 404) {
            return [];
        }
        throw new CodedError(data.error.code, data.error.message);
    }
    const resources = data.resources ? _.uniq(data.resources) : [];
    return resources;
};

export const buildFilterWithResourceList = (resourceList = []) => {
    const filter = {
        IN: {
            [config.esConfig.authFilterField]: [...resourceList],
        },
    };
    return filter;
};

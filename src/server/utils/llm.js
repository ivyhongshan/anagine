import ollama from 'ollama';
import config from '../config';

module.exports = ollama;

module.exports.chatWithModel = async function(model, messages, stream = false, options = {}) {
    try {
        return await ollama.chat({
            model,
            messages,
            stream,
            ...options
        });
    } catch (error) {
        console.error(`Error chatting with model ${model}:`, error);
        throw error;
    }
};
  
module.exports.generateText = async function(model, messages, stream = false, options = {}) {
    try {
        return await ollama.generate({
            model,
            messages,
            stream,
            ...options
        });
    } catch (error) {
        console.error(`Error generating text with model ${model}:`, error);
        throw error;
    }
};

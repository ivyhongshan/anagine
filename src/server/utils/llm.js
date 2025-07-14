import ollama from 'ollama';
import config from '../config.js'; // Ensure relative path is correct

/**
 * Chat with a specified LLM model.
 * @param {string} model - Model name
 * @param {Array} messages - Array of { role, content } message objects
 * @param {boolean} [stream=false] - Whether to stream responses
 * @param {object} [options={}] - Additional options
 * @returns {Promise<object>}
 */
export async function chatWithModel(model = config.ollamaConfig.model, messages, stream = false, options = {}) {
  try {
    return await ollama.chat({
      model,
      messages,
      stream,
      ...options
    });
  } catch (error) {
    console.error(`? Error chatting with model "${model}":`, error.message || error);
    throw error;
  }
}

/**
 * Generate text using a specified LLM model.
 * @param {string} model - Model name
 * @param {Array} messages - Array of { role, content } message objects
 * @param {boolean} [stream=false] - Whether to stream responses
 * @param {object} [options={}] - Additional options
 * @returns {Promise<object>}
 */
export async function generateText(model = config.ollamaConfig.model, messages, stream = false, options = {}) {
  try {
    return await ollama.generate({
      model,
      messages,
      stream,
      ...options
    });
  } catch (error) {
    console.error(`? Error generating text with model "${model}":`, error.message || error);
    throw error;
  }
}


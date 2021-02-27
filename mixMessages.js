// An array of objects containing 
const messages = [];

// Creates a message object and adds it to the array of messages
// Topic must be astrology, inspirational, or jokes
const addMessage = (topic, message) => {
  let message = { };
  topic.toLowerCase();
  if (topic === 'astrology' || topic === 'inspirational' || topic === 'jokes') {
    message = {
      topic,
      message
    };
  } else {
    console.log(`Error: topic must be astrology, inspirational, or jokes`);
  }
  messages.push(message);
};
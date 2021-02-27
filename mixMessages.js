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

addMessage('astrological', 'You’re knee-deep in this process of self-expansion and looking at the world through a macro perspective, and yet the cosmos wish to momentarily remove you from this headspace.');
addMessage('astrological', 'Spill the beans but don\'t lose sight of your current reality.');
addMessage('astrological', 'Work hard, so you can play later.');
addMessage('inspirational', 'All our dreams can come true, if we have the courage to pursue them.');
addMessage('inspirational', 'The secret of getting ahead is getting started.');
addMessage('inspirational', 'Only the paranoid survive.');
addMessage('jokes', 'What do you call a bear without any teeth? A gummy bear!');
addMessage('jokes', 'What’s at the bottom of the ocean and shivers? A nervous wreck!');
addMessage('jokes', 'How many tickles does it take to tickle an octopus? Tentacles!');

// Returns a random message
const randomMessage = () => {
  const index = Math.floor(Math.random * messages.length);
  return `This is a/an ${messages[index].topic} quotes: ${messages[index].message}`
};

console.log(randomMessage());
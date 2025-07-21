async function getTopics(){
try {
if ('browsingTopics' in document && document.featurePolicy.allowsFeature('browsing-topics')) {
console.log('document.browsingTopics() is supported');
const topics = await document.browsingTopics();
console.log( 'Called from topics-demo.glitch.me/observe/index.html in iframe')
console.log( 'InNumber of topics: ' , topics.length);
console.log(topics)
} 
} catch(error) {
console.log( 'Error:', error);
}
}
setInterval(() => {
        getTopics();
        console.log('Called topics update')
}, 1000);
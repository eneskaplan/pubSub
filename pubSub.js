function PubSub() {
  this.subscribers = {};
}
PubSub.prototype.publish = function(eventName, data) {
  if(!Array.isArray(this.subscribers[eventName])) {
    return;
  }
  this.subscribers[eventName].forEach(function(callback) {
    return callback(data);
  })
};

PubSub.prototype.subscribe = function(eventName, callback) {
  if(!Array.isArray(this.subscribers[eventName])) {
    this.subscribers[eventName] = [];
  }
  this.subscribers[eventName].push(callback)
};

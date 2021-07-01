module.exports = function(RED) {
    function LowerCaseNode(config) {
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case", LowerCaseNode);
}
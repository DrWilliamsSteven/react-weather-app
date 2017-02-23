var React = require('react')
var { Modal, Button } = require('react-bootstrap');

var ErrorModal = React.createClass({

    getInitialState() {
        return { showModal: false };
    },

    getDefaultProps: function() {
        return {
            title: "There was an error!"
        }
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    open() {
        this.setState({ showModal: true });
    },

    close() {
        this.setState({ showModal: false });
    },

    componentDidMount: function() {
        this.open();
    },


    render() {

        var { title, message } = this.props;
        return (
            <Modal id='error-modal' show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{message}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
    }
});

module.exports = ErrorModal;

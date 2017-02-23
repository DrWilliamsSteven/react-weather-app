var React = require("react")
var Nav = require("Nav")
var { Grid, Row, Col } = require('react-bootstrap');

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={4} xsOffset={3}>
                    {props.children}
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

module.exports = Main;

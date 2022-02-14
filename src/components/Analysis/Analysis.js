import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BarChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {Bar} from "recharts";

class Analysis extends Component {
    constructor() {
        super();
        this.state={
            data:[
                {Technology:'Java',Projects:100},
                {Technology:'PHP',Projects:90},
                {Technology:'Laravel',Projects:98},
                {Technology:'Node Js',Projects:60},
                {Technology:'.Net',Projects:50},
                {Technology:'Ruby',Projects:30},
                {Technology:'Django',Projects:70},
                {Technology:'React',Projects:50},
            ]
        }
    }
    render() {
        var blue = "rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col  lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey={"Technology"}></XAxis>
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={blue}>

                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="des">
                                ReactJS is an open source JavaScript library designed by Facebook for creating rich and engaging web apps fast and efficiently with minimal coding. The core objective of ReactJS is providing the best possible rendering performance. Its strength comes from the focus on individual components. Instead of working on the entire web app, ReactJS allows a developer to break down the complex UI into simpler components.
                                Today, ReactJS has become highly popular because of its extra simplicity and flexibility. Many people are even referring to it as the future of web development. It is estimated that more than 1,300 developers and over 94,000 sites utilize ReactJS.
                            </p>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Analysis;
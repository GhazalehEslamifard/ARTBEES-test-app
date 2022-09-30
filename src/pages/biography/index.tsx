import { Row, Col } from "antd";
import React from "react";

import PopUpComponent from "../../components/pop-up";

import { Container } from "./styles";

class BiographyPage extends React.Component<
  Record<string, unknown>,
  { isVisible: boolean }
> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = { isVisible: true };
  }

  componentDidMount() {
    this.setState({ isVisible: true });
  }

  handleClose = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <Container>
        {this.state.isVisible ? (
          <PopUpComponent onClose={this.handleClose} />
        ) : null}
        <Row justify="center" align="top">
          <Col span={8}>
            <h2>Ghazaleh Eslamifard</h2>
            <p>
              Meticulous web developer with more than 2 years of frontend
              experience in Agile environments with a passion for coding. While
              learning to work with programming and numeric computing platforms,
              I realized my interest in programming and took online courses
              about 1 year.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BiographyPage;

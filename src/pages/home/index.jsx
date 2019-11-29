import React from 'react';
import './index.scss';
import { Button, Radio, Icon, Row, Col } from 'antd';
class Home extends React.Component {
	state = {
    size: 'large',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large" disabled>Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <Button type="danger" size={size}>
          Danger
        </Button>
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" icon="download" size={size} />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size}>
          Download
        </Button>
        <Button type="primary" icon="download" size={size}>
          Download
        </Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary" block>
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
				<br/>
				<Icon type="step-backward" />
				<Row>
					<Col xs={2} sm={4} md={6} lg={8} xl={10}>
						Col
					</Col>
					<Col xs={20} sm={16} md={12} lg={8} xl={4}>
						Col
					</Col>
					<Col xs={2} sm={4} md={6} lg={8} xl={10}>
						Col
					</Col>
				</Row>
      </div>
    );
  }
}
export default Home;

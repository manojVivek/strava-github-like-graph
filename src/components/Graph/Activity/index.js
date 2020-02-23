import React from 'react';
import {Statistic, Row, Col, Typography, Card, Icon} from 'antd';
import {DistanceIcon, SpeedometerIcon} from '../../Icons';

const {Text} = Typography;

function getPace(elapsed_time, distance) {
  const timeMins = elapsed_time / 60 / (distance / 1000);
  const decimalInSecs = Math.round((timeMins - Math.floor(timeMins)) * 60);
  return `${Math.floor(timeMins)}:${decimalInSecs}`;
}

export default function Activity({
  name,
  distance,
  elapsed_time,
  location_city,
  location_country,
}) {
  return (
    <Row className="bottom-space-small">
      <Card
        title={name}
        style={{width: 600}}
        extra={
          <Text>
            {location_city ? `${location_city}, ` : null}
            {location_country}
          </Text>
        }
      >
        <Col span={8}>
          <Statistic
            title=""
            value={distance / 1000}
            precision={2}
            prefix={<Icon component={DistanceIcon} />}
            suffix="Km"
          />
        </Col>
        <Col span={8}>
          <Statistic
            title=""
            value={elapsed_time / 60}
            precision={0}
            prefix={<Icon type="clock-circle" />}
            suffix="mins"
          />
        </Col>
        <Col span={8}>
          <Statistic
            title=""
            value={getPace(elapsed_time, distance)}
            precision={2}
            prefix={<Icon component={SpeedometerIcon} />}
            suffix="/km"
          />
        </Col>
      </Card>
    </Row>
  );
}

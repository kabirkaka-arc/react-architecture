import * as React from "react";
import DealsPipelineListingsView from "../presentation/DealsPipelineListingsView";
import DealCard from "../presentation/DealCard";
import { Col, Row } from "react-bootstrap";

const DashboardContainer: React.FC = () => {
  return (
    <>
      <Row className="row-gap-4 mb-4">
        <Col lg={4} md={6} sm={12}>
          <DealCard
            heading={"Total Deals on HT"}
            icon="HT"
            totalDeals={256}
            outOfTotalHeading="Deals Head of Terms"
            outOfTotal={156}
            growth="positive"
            growthValue={20.0}
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <DealCard
            heading={"Total Deals on UA"}
            icon="UA"
            totalDeals={256}
            outOfTotalHeading="Deals Under Analysis"
            outOfTotal={100}
            growth="negative"
            growthValue={70.0}
          />
        </Col>
        <Col lg={4} md={6} sm={12}>
          <DealCard outOfTotalPercent={12} />
        </Col>
      </Row>
      <DealsPipelineListingsView />
    </>
  );
};

export default DashboardContainer;

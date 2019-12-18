import React, { Component } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, CardFooter

} from 'reactstrap';

let styles = {
    cardTitle: {
        fontWeight: '700',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#002f34',
        fontSize: '20px',
    },
    cardSubTitle: { color: '#002f34', fontSize: '14px', fontWeight: '500' },
    cardFooter: {
        marginTop: '-25px'
    },
    footerLocation: {
        marginLeft: '0px', float: 'left', fontSize: '10px',
    },
    footerDatePosted: {
        float: 'right', fontSize: '10px',
    },
        search: {
            display: 'flex',
            width: '100%',
            height: '48px',
            boxSizing:'border-box',
            border: '2px solid #002f34',
            borderRadius:'0px'
        }

};
export class Home extends Component {
  static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
  render () {
      return (
          <div>
              <Row>
                  <Form inline className="col-md-12 col-sm-12 col-lg-12">
                      <Col xs="12" sm="5" md="5" lg="5">
                          <FormGroup>
                              <Label for="exampleEmail" className="col-lg-2 col-md-4 col-sm-6 col-xs-12">Email</Label>
                              <Input style={styles.search} type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" className="col-lg-10 col-md-8 col-sm-6 col-xs-12"/>
                          </FormGroup>
                      </Col>
                      <Col xs="12" sm="5" md="5" lg="5">
                           <FormGroup>
                               <Label for="examplePassword" className="col-lg-2 col-md-4 col-sm-6 col-xs-12">Password</Label>
                              <Input style={styles.search} type="text" name="location" id="locationText" placeholder="Location Search here..." className="col-lg-10 col-md-8 col-sm-6 col-xs-12" />
                          </FormGroup>
                      </Col>

                      <Col xs="12" sm="2" md="2" lg="2">
                          <Button>Submit</Button>

                      </Col>
                  </Form>
              </Row>
              <br/>
          
              <Row>
                  <Col xs="12" sm="6" md="4" lg="3">
                      <Card>
                          <CardImg style={{ height: '250px', width: 'auto' }} src="https://apollo-singapore.akamaized.net/v1/files/iaanq1y60qrc3-PK/image;s=300x600;q=60" alt="Card image cap" />
                          <CardBody>
                              <CardTitle style={styles.cardTitle}>Rs 110,000,000</CardTitle>
                              <CardSubtitle style={styles.cardSubTitle}>4 Bds - 4 Ba - 1720 Square Feet</CardSubtitle>
                              <CardText>4 Bed luxury apartment avail be for Sale in B17 CDA Approved Islamabad</CardText>

                          </CardBody>
                          <CardFooter style={styles.cardFooter}>
                              <span style={styles.footerLocation}>B-17, Islamabad</span>
                              <span style={styles.footerDatePosted}>Dec 12, 2019</span>
                          </CardFooter>
                      </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3">
                      <Card>
                          <CardImg style={{ height: '250px', width: 'auto' }} src="https://apollo-singapore.akamaized.net/v1/files/vbjtwm6fc1b7-PK/image;s=300x600;q=60" alt="Card image cap" />
                          <CardBody>
                              <CardTitle style={styles.cardTitle}>Rs 110,000,000</CardTitle>
                              <CardSubtitle style={styles.cardSubTitle}>4 Bds - 4 Ba - 1720 Square Feet</CardSubtitle>
                              <CardText>4 Bed luxury apartment avail be for Sale in B17 CDA Approved Islamabad</CardText>

                          </CardBody>
                          <CardFooter style={styles.cardFooter}>
                              <span style={styles.footerLocation}>B-17, Islamabad</span>
                              <span style={styles.footerDatePosted}>Dec 12, 2019</span>
                          </CardFooter>
                      </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3">
                      <Card>
                          <CardImg style={{ height: '250px', width: 'auto' }} top width="auto" src="https://apollo-singapore.akamaized.net/v1/files/3664t5ijbj9r1-PK/image;s=300x600;q=60" alt="Card image cap" />
                          <CardBody>
                              <CardTitle style={styles.cardTitle}>Rs 110,000,000</CardTitle>
                              <CardSubtitle style={styles.cardSubTitle}>4 Bds - 4 Ba - 1720 Square Feet</CardSubtitle>
                              <CardText>4 Bed luxury apartment avail be for Sale in B17 CDA Approved Islamabad</CardText>

                          </CardBody>
                          <CardFooter style={styles.cardFooter}>
                              <span style={styles.footerLocation}>B-17, Islamabad</span>
                              <span style={styles.footerDatePosted}>Dec 12, 2019</span>
                          </CardFooter>
                      </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3">
                      <Card>
                          <CardImg style={{ height: '250px', width: 'auto' }} top width="auto" src="http://www.successmoves.co.uk/wp-content/uploads/2012/07/50708_1280x720-318x180.jpg" alt="Card image cap" />
                          <CardBody>
                              <CardTitle style={styles.cardTitle}>Rs 110,000,000</CardTitle>
                              <CardSubtitle style={styles.cardSubTitle}>4 Bds - 4 Ba - 1720 Square Feet</CardSubtitle>
                              <CardText>4 Bed luxury apartment avail be for Sale in B17 CDA Approved Islamabad</CardText>

                          </CardBody>
                          <CardFooter style={styles.cardFooter}>
                              <span style={styles.footerLocation}>B-17, Islamabad</span>
                              <span style={styles.footerDatePosted}>Dec 12, 2019</span>
                          </CardFooter>
                      </Card>
                  </Col>
              </Row>

              <br/>
              <Row>
                  <Col xs="12" sm="6" md="4" lg="3">
                      <Card>
                          <CardImg style={{ height: '250px', width: 'auto' }} src="https://apollo-singapore.akamaized.net/v1/files/iaanq1y60qrc3-PK/image;s=300x600;q=60" alt="Card image cap" />
                          <CardBody>
                              <CardTitle style={styles.cardTitle}>Rs 110,000,000</CardTitle>
                              <CardSubtitle style={styles.cardSubTitle}>4 Bds - 4 Ba - 1720 Square Feet</CardSubtitle>
                              <CardText>4 Bed luxury apartment avail be for Sale in B17 CDA Approved Islamabad</CardText>

                          </CardBody>
                          <CardFooter style={styles.cardFooter}>
                              <span style={styles.footerLocation}>B-17, Islamabad</span>
                              <span style={styles.footerDatePosted}>Dec 12, 2019</span>
                          </CardFooter>
                      </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3">
                      <Card>
                          <CardImg style={{ height: '250px', width: 'auto' }} src="https://apollo-singapore.akamaized.net/v1/files/vbjtwm6fc1b7-PK/image;s=300x600;q=60" alt="Card image cap" />
                          <CardBody>
                              <CardTitle style={styles.cardTitle}>Rs 110,000,000</CardTitle>
                              <CardSubtitle style={styles.cardSubTitle}>4 Bds - 4 Ba - 1720 Square Feet</CardSubtitle>
                              <CardText>4 Bed luxury apartment avail be for Sale in B17 CDA Approved Islamabad</CardText>

                          </CardBody>
                          <CardFooter style={styles.cardFooter}>
                              <span style={styles.footerLocation}>B-17, Islamabad</span>
                              <span style={styles.footerDatePosted}>Dec 12, 2019</span>
                          </CardFooter>
                      </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3">
                      <Card>
                          <CardImg style={{ height: '250px', width: 'auto' }} top width="auto" src="https://apollo-singapore.akamaized.net/v1/files/3664t5ijbj9r1-PK/image;s=300x600;q=60" alt="Card image cap" />
                          <CardBody>
                              <CardTitle style={styles.cardTitle}>Rs 110,000,000</CardTitle>
                              <CardSubtitle style={styles.cardSubTitle}>4 Bds - 4 Ba - 1720 Square Feet</CardSubtitle>
                              <CardText>4 Bed luxury apartment avail be for Sale in B17 CDA Approved Islamabad</CardText>

                          </CardBody>
                          <CardFooter style={styles.cardFooter}>
                              <span style={styles.footerLocation}>B-17, Islamabad</span>
                              <span style={styles.footerDatePosted}>Dec 12, 2019</span>
                          </CardFooter>
                      </Card>
                  </Col>
                  <Col xs="12" sm="6" md="4" lg="3">
                      <Card>
                          <CardImg style={{ height: '250px', width: 'auto' }} top width="auto" src="http://www.successmoves.co.uk/wp-content/uploads/2012/07/50708_1280x720-318x180.jpg" alt="Card image cap" />
                          <CardBody>
                              <CardTitle style={styles.cardTitle}>Rs 110,000,000</CardTitle>
                              <CardSubtitle style={styles.cardSubTitle}>4 Bds - 4 Ba - 1720 Square Feet</CardSubtitle>
                              <CardText>4 Bed luxury apartment avail be for Sale in B17 CDA Approved Islamabad</CardText>

                          </CardBody>
                          <CardFooter style={styles.cardFooter}>
                              <span style={styles.footerLocation}>B-17, Islamabad</span>
                              <span style={styles.footerDatePosted}>Dec 12, 2019</span>
                          </CardFooter>
                      </Card>
                  </Col>
              </Row>
          </div>
      );
  }
}

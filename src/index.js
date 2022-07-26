import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { Col, Row, Button, Container } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';

export const TabView = (props) => {

  const [backgroundColor, setBackgroundColor] = useState('#aaa')
  const [color, setColor] = useState('#aaa')
  const [unselectedColor, setUnselectedColor] = useState('#aaa')
  const [selected, setSelected] = useState(0);

  const resetColors = () => {
    setBackgroundColor(props.theme != null ? (props.theme.backgroundColor != null ? props.theme.backgroundColor : 'white' ) : 'white');
    setColor(props.theme != null ? (props.theme.color != null ? props.theme.color : 'black' ) : 'black');
    setUnselectedColor(props.theme != null ? (props.theme.unselectedColor != null ? props.theme.unselectedColor : 'gray' ) : 'gray');
  }

  const wrapSetSelected = (i) => {
    setSelected(i);
    if(props.onSelectedTab != null) props.onSelectedTab(i);
  }

  useEffect(() => {
    resetColors();
  }, [])

  useEffect(() => {
    wrapSetSelected(props.setSelectedTab);
  }, [props.setSelectedTab])

  const { [props.navigationData.menuIcon]: IconMenu } = Icons

  return (
  
    <div className="w-100 d-flex flex-column" style={{height: '100vh'}}>

      <Row className='justify-content-start align-items-center px-2' 
        style={{
          height: '50px',
          backgroundColor: backgroundColor
        }}
        >
        <Col className='text-center ps-0 pe-0 pt-0 m-0' sm={1} xs={1} md={1} xl={1} xxl={1}  style={{paddingBottom: '4px'}}><h4 className='m-0 p-0'><IconMenu /></h4></Col>
        <Col className='ps-0 pe-0 pt-0 m-0' ><h4 className='m-0 p-0'><strong>{props.navigationData.title}</strong></h4></Col>
        <Col className='p-0 m-0 flex-grow-1'></Col>
      </Row>

      <Row className='flex-grow-1 bg-dark text-light'>
        <Col>
          {
            props.tabsData[selected].component
          }
        </Col>
      </Row>
      
      <Row className='justify-content-center' 
        style={{
          height: '50px',
          backgroundColor: backgroundColor,
        }}>
        {
          props.tabsData.map((item, i) => {
            
            const { [item.icon]: Icon } = Icons

            return ( 

              <Col 
                key={i} 
                className='text-center'
                style={{
                  cursor: 'pointer',
                  color: selected === i   ? color : unselectedColor,
                  fontWeight: selected === i   ? 600 : 300
                }}
                onClick={() => {
                  wrapSetSelected(i);
                }}
                >
                <Container fluid>
                  <Row>
                    <Col>
                      <Icon />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {item.caption}
                    </Col>
                  </Row>
                </Container>
              </Col>

            )
          })
        }
      </Row>
      
    </div>

  )
}

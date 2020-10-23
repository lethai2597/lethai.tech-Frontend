import {Typography, Image, Menu, Timeline, Divider, Progress, Row, Col, Tag, Space, Form, Input, Button, List, Anchor  } from 'antd'
import { MailOutlined, UserOutlined, FireOutlined, LikeOutlined, ReadOutlined, ClockCircleOutlined, MessageOutlined } from '@ant-design/icons';
import ReactHtmlParser from 'react-html-parser'; 
import {Experiences_List, Language_Skills, Framework_Skills, About_List, Contact_List, Education_List} from '../model'
import Head from 'next/head'

const layout = {
  labelCol: { span: 24 }
};

export default function Home() {
  const {Text, Title, Paragraph} = Typography
  const { TextArea } = Input;
  const { Link } = Anchor;
  return (
    <>
    <Head>
      <title>Thai's portfolio - lehai.tech</title>
    </Head>
    <div style={{backgroundColor: '#fff', boxShadow: '0 3px 5px #cacaca'}}>
      <div style={{maxWidth: 840, margin: 'auto' }}>
        <div style={{position: 'relative', maxHeight: 400, width: '100%', marginBottom: 30}}>
          <div style={{position: 'relative', maxHeight: 350, overflow: 'hidden'}}>
            <img style={{objectFit: 'cover', width: '100%'}}src="/images/cover.jpg" />
          </div>
          <div style={{position: "absolute", bottom: -20, width: '100%', textAlign: 'center'}}>
            <Image
              style={{borderRadius: '100%', overflow: 'hidden', border: '5px solid white'}}
              width={175}
              src="/images/avatar.jpg"
            />
          </div>
        </div>
        <div style={{textAlign: 'center', borderBottom: '1px solid #eee'}}>
          <Title>
            Lê Thái
          </Title>
          <Text>FA to be SA</Text><br/><br/>
        </div>
        <Menu mode="horizontal">
          <Menu.Item key="about" icon={<UserOutlined />}>
            About
          </Menu.Item>
          <Menu.Item key="skills" icon={<FireOutlined />}>
            Skills
          </Menu.Item>
          <Menu.Item key="experience" icon={<LikeOutlined />}>
            Experience
          </Menu.Item>
          <Menu.Item key="education" icon={<ReadOutlined />}>
            Education
          </Menu.Item>
          <Menu.Item key="contact" icon={<MailOutlined />}>
            Contact
          </Menu.Item>
        </Menu>
      </div>
    </div> 
    <div style={{maxWidth: 840, margin: 'auto' }}>
      <div style={{padding: '40px 20px'}}>
        <Divider orientation="left" plain>
          <Title level={4}>
            <UserOutlined /> About Me
          </Title>
        </Divider>
        <Paragraph style={{padding: 10}}>Hello,I'm Thai. Now, i'm Javascript Developer in Alobase and 5th years student of HUST. Let's read more about me. </Paragraph>
        <Row>
          {About_List.map(item => <Col style={{padding: 10}} xs={24} xl={12}><Row ><Col style={{fontWeight: 'bold', marginRight: 10}} xl={8}><Space>{ item.icon } {item.label}:</Space></Col>{item.value}</Row></Col>)}
        </Row>
      </div>
      <Row>
        <Col xs={24} xl={12}>
          <div style={{padding: '40px 20px'}}>
            <Divider orientation="left" plain>
              <Title level={4}>
                <FireOutlined /> Develop Language Skills
              </Title>
            </Divider>
            {Language_Skills.map(skill => <><b>{skill.label}</b><Progress percent={skill.value} strokeColor={skill.color} status="active" /></>)}
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div style={{padding: '40px 20px'}}>
            <Divider orientation="left" plain>
              <Title level={4}>
                <FireOutlined /> Framework/Libraly Skills
              </Title>
            </Divider>
            {Framework_Skills.map(skill => <><b>{skill.label}</b><Progress percent={skill.value} strokeColor={skill.color} status="active" /></>)}
          </div>
        </Col>
      </Row>
      <div style={{padding: '40px 20px'}}>
        <Divider orientation="left" plain>
          <Title level={4}>
            <LikeOutlined /> Experiences
          </Title>
        </Divider>
        <Timeline pending="Updating ..." mode="alternate">
          { Experiences_List.map(experience => <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} label={<Tag color="#2db7f5">{experience.time}</Tag>}>{ ReactHtmlParser (experience.label) }<br />{ ReactHtmlParser (experience.content) }</Timeline.Item>)}
        </Timeline>
      </div>
      <div style={{padding: '40px 20px'}}>
        <Divider orientation="left" plain>
          <Title level={4}>
            <LikeOutlined /> Education
          </Title>
        </Divider>
        <Timeline pending="Updating ..." mode="alternate">
          { Education_List.map(experience => <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />} label={<Tag color="#2db7f5">{experience.time}</Tag>}>{ ReactHtmlParser (experience.label) }<br />{ ReactHtmlParser (experience.content) }</Timeline.Item>)}
        </Timeline>
      </div>
      <Row>
        <Col xs={24} xl={12}>
          <div style={{padding: '40px 20px'}}>
            <Divider orientation="left" plain>
              <Title level={4}>
                <MailOutlined /> Social & Mail
              </Title>
            </Divider>
            <List
              itemLayout="horizontal"
              dataSource={Contact_List}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={item.icon}
                    title={item.label}
                    description={item.content}
                  />
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div style={{padding: '40px 20px'}}>
            <Divider orientation="left" plain>
              <Title level={4}>
                <MessageOutlined /> Contact Form
              </Title>
            </Divider>
            <Form {...layout}>
              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>
              <Form.Item label="Content" name="email">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
      <div style={{borderTop: '1px solid #eee', padding: 20, textAlign: 'center', marginBottom: 20}}>
        © 2020 by Le Thai
      </div>
    </div>
    </>
  )
}

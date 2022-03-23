import React, { useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Modal,
  Row,
} from 'react-bootstrap'
import styles from '../../../styles/content.module.css'
import * as FaIcons from 'react-icons/fa'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addNewUser } from '../../../redux'

function HeaderContent(props) {
  const { handleSearch, searchData } = props
  const dispatch = useDispatch()
  const [showModal, setshowModal] = useState(false)
  const [newUser, setNewUser] = useState({
    id: { name: '', value: '' },
    name: { first: '', last: '' },
    dob: { date: '' },
    picture: { large: '' },
    email: '',
    phone: '',
  })
  const [birthday, setbirthday] = useState('')

  const clearData = () => {
    setNewUser(() => ({
      id: { name: '', value: '' },
      name: { first: '', last: '' },
      dob: { date: '' },
      email: '',
      phone: '',
      picture: { large: '' },
    }))
  }

  const openModal = () => {
    setshowModal(true)
  }

  const closeModal = () => {
    setshowModal(false)
  }

  const handleDate = (e) => {
    const date = new Date(e)
    const newDate = new Date(
      date.toString().split('GMT')[0] + ' UTC'
    ).toISOString()
    setbirthday(e)
    setNewUser((prevData) => ({
      ...prevData,
      dob: { ...prevData.dob, date: newDate },
    }))
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setNewUser((prevData) => ({
        ...prevData,
        picture: { ...prevData.picture, large: URL.createObjectURL(img) },
      }))
    }
  }

  const counter = useSelector((state) => state.users.searchUser)
  return (
    <Container
      className='d-flex align-items-center justify-content-between p-3 my-3'
      style={{ backgroundColor: 'white' }}
    >
      <div>
        <h1>Personnel-List </h1>
      </div>
      <div className='d-flex'>
        <InputGroup className={styles.inputGroupStyle}>
          <InputGroup.Text id='btnGroupAddon' className={styles.iconInputStyle}>
            <FaIcons.FaSearch color='#38bcbc' className='icons' />
          </InputGroup.Text>
          <Form.Control
            type='text'
            placeholder='Find Personnels'
            aria-label='Find Personnels'
            aria-describedby='btnGroupAddon'
            className={styles.inputStyle}
            value={searchData}
            onChange={(e) => handleSearch(e.target.value)}
            name='search'
          />
        </InputGroup>
        <Button className={styles.addBtnStyle} onClick={() => openModal()}>
          Add Personnel <FaIcons.FaPlus className={styles.iconsRight} />
        </Button>

        <Modal
          show={showModal}
          onHide={closeModal}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Personnel</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Floating className='mb-3'>
                  <Form.Control
                    id='floatingInputCustom'
                    type='text'
                    value={newUser.id.name}
                    name='nameId'
                    onChange={(e) => {
                      setNewUser((prevData) => ({
                        ...prevData,
                        id: { ...prevData.id, name: event.target.value },
                      }))
                    }}
                  />
                  <label htmlFor='floatingInputCustom'>Name Id</label>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Floating className='mb-3'>
                  <Form.Control
                    id='floatingInputCustom'
                    type='text'
                    name='valueId'
                    value={newUser.id.value}
                    onChange={(e) => {
                      setNewUser((prevData) => ({
                        ...prevData,
                        id: { ...prevData.id, value: event.target.value },
                      }))
                    }}
                  />
                  <label htmlFor='floatingInputCustom'>Value Id</label>
                </Form.Floating>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Floating className='mb-3'>
                  <Form.Control
                    id='floatingInputCustom'
                    type='text'
                    value={newUser.name.first}
                    onChange={(e) => {
                      setNewUser((prevData) => ({
                        ...prevData,
                        name: { ...prevData.name, first: event.target.value },
                      }))
                    }}
                  />
                  <label htmlFor='floatingInputCustom'>First Name</label>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Floating className='mb-3'>
                  <Form.Control
                    id='floatingInputCustom'
                    type='text'
                    value={newUser.name.last}
                    onChange={(e) => {
                      setNewUser((prevData) => ({
                        ...prevData,
                        name: { ...prevData.name, last: event.target.value },
                      }))
                    }}
                  />
                  <label htmlFor='floatingInputCustom'>Last Name</label>
                </Form.Floating>
              </Col>
            </Row>
            <Form.Floating className='mb-3'>
              <Form.Control
                id='floatingPasswordCustom'
                type='tel'
                value={newUser.phone}
                onChange={(e) => {
                  setNewUser((prevData) => ({
                    ...prevData,
                    phone: e.target.value,
                  }))
                }}
              />
              <label htmlFor='floatingPasswordCustom'>Telephone</label>
            </Form.Floating>
            <Form.Floating className='mb-3'>
              <Form.Control
                id='floatingPasswordCustom'
                type='date'
                placeholder='Birthday'
                value={birthday}
                onChange={(e) => handleDate(e.target.value)}
              />
              <label htmlFor='floatingPasswordCustom'>Birthday</label>
            </Form.Floating>
            <Form.Floating className='mb-3'>
              <Form.Control
                id='floatingPasswordCustom'
                type='email'
                value={newUser.email}
                onChange={(e) => {
                  setNewUser((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }}
              />
              <label htmlFor='floatingPasswordCustom'>Email</label>
            </Form.Floating>
            {newUser.picture.large !== '' && (
              <div
                style={{
                  width: '100%',
                  height: '20%',
                  overflow: 'hidden',
                }}
                className='d-flex align-items-center justify-content-center'
              >
                <Image src={newUser.picture.large} width='50%' />
              </div>
            )}
            <Form.Control type='file' onChange={onImageChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={closeModal}>
              Close
            </Button>
            <Button
              variant='primary'
              onClick={() => {
                dispatch(addNewUser(newUser))
                clearData()
                closeModal()
              }}
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  )
}

const mapDispatchToProps = {
  addNewUser,
}

export default connect(null, mapDispatchToProps)(HeaderContent)

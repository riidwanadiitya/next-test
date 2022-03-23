import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Image, Modal, Row } from 'react-bootstrap'
import styles from '../../styles/cardStyle.module.css'
import * as HiIcons from 'react-icons/hi'
import Script from 'next/script'
import { connect, useDispatch } from 'react-redux'
import { deleteUser, editUser } from '../../redux'

function CardPersonel(props) {
  const { userEmail, data, index } = props

  const [showModal, setshowModal] = useState(false)
  const [birthday, setbirthday] = useState('')
  const [editBirthday, seteditBirthday] = useState('')

  const [userData, setuserData] = useState({
    id: { name: data.id.name, value: data.id.value },
    name: { first: data.name.first, last: data.name.last },
    dob: { date: '' },
    picture: { large: data.picture.large },
    email: data.email,
    phone: data.phone,
  })

  const dispatch = useDispatch()

  const openModal = () => {
    setshowModal(true)
    const latest = data.dob.date
    const newDate = latest.slice(0, 10)
    seteditBirthday(newDate)

    const date = new Date(latest)
    const dobDate = new Date(
      date.toString().split('GMT')[0] + ' UTC'
    ).toISOString()
    setuserData((prevData) => ({
      ...prevData,
      dob: { ...prevData.dob, date: dobDate },
    }))
  }

  useEffect(() => {
    const date = data.dob.date
    const newMonth = date.slice(5, 7)
    const newDate = date.slice(8, 10)
    setbirthday(newDate + ' - ' + newMonth)
  }, [])

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setuserData((prevData) => ({
        ...prevData,
        picture: { ...prevData.picture, large: URL.createObjectURL(img) },
      }))
    }
  }

  return (
    <>
      <Card className={styles.cardStyle}>
        <Card.Header className='d-flex justify-content-between'>
          <div>
            Personnel ID:{' '}
            <span style={{ color: 'teal' }}>{userData.id.value}</span>
          </div>
          <div>
            <div className='dropdown'>
              <HiIcons.HiDotsHorizontal
                size={25}
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              />
              {/* <ul
                className='dropdown-menu d-flex flex-column justify-content-center px-3'
                aria-labelledby='dropdownMenuButton1'
              >
                <li
                  className={styles.cardBtn}
                  onClick={() => dispatch(deleteUser(index))}
                >
                  <span>
                    <HiIcons.HiTrash /> Delete
                  </span>
                </li>
                <li className={styles.cardBtn} onClick={() => openModal()}>
                  <span>
                    <HiIcons.HiPencilAlt /> Edit
                  </span>
                </li>
              </ul> */}
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <div className={styles.imgProfileContainer}>
            <Image src={userData.picture.large} className={styles.imgStyle} />
          </div>
          <div>
            <span className={styles.dataTitle}>Name</span>
            <br />
            <span className={styles.dataFill}>
              {userData.name.first + ' ' + userData.name.last}
            </span>
          </div>
          <div>
            <span className={styles.dataTitle}>Telephone</span>
            <br />
            <span className={styles.dataFill}>{userData.phone}</span>
          </div>
          <div>
            <span className={styles.dataTitle}>Birthday</span>
            <br />
            <span className={styles.dataFill}>{birthday}</span>
          </div>
          <div>
            <span className={styles.dataTitle}>Email</span>
            <br />
            <span className={styles.dataFill}>{userData.email}</span>
          </div>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between'>
          <Button
            variant='success'
            className={`${styles.cardBtn} d-flex justify-content-center`}
            onClick={() => openModal()}
          >
            Edit
          </Button>
          <Button
            variant='danger'
            className={`${styles.cardBtn} d-flex justify-content-center`}
            onClick={() => dispatch(deleteUser(data.email, index))}
          >
            delete
          </Button>
        </Card.Footer>
      </Card>

      <Modal
        show={showModal}
        onHide={() => setshowModal(false)}
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
                  value={userData.id.name === null ? '' : userData.id.name}
                  name='nameId'
                  onChange={(e) => {
                    setuserData((prevData) => ({
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
                  value={userData.id.value === null ? '' : userData.id.value}
                  onChange={(e) => {
                    setuserData((prevData) => ({
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
                  value={userData.name.first}
                  onChange={(e) => {
                    setuserData((prevData) => ({
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
                  value={userData.name.last}
                  onChange={(e) => {
                    setuserData((prevData) => ({
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
              value={userData.phone}
              onChange={(e) => {
                setuserData((prevData) => ({
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
              value={editBirthday}
              onChange={(e) => handleDate(e.target.value)}
            />
            <label htmlFor='floatingPasswordCustom'>Birthday</label>
          </Form.Floating>
          <Form.Floating className='mb-3'>
            <Form.Control
              id='floatingPasswordCustom'
              type='email'
              value={userData.email}
              onChange={(e) => {
                setuserData((prevData) => ({
                  ...prevData,
                  email: e.target.value,
                }))
              }}
            />
            <label htmlFor='floatingPasswordCustom'>Email</label>
          </Form.Floating>
          {userData.picture.large !== '' && (
            <div
              style={{
                width: '100%',
                height: '20%',
                overflow: 'hidden',
              }}
              className='d-flex align-items-center justify-content-center'
            >
              <Image src={userData.picture.large} width='50%' />
            </div>
          )}
          <Form.Control type='file' onChange={onImageChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='primary'
            onClick={() => {
              setshowModal(false)
              dispatch(editUser())
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CardPersonel

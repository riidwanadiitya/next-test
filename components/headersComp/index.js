import Link from 'next/link'
import { Button, Container, Image, Navbar } from 'react-bootstrap'

export default function HeaderComp() {
  return (
    <div style={{ height: '15vh' }}>
      <Navbar>
        <Container fluid className='px-4'>
          <Navbar.Brand href='#home'>
            <Image
              src='https://images.bisnis-cdn.com/posts/2020/05/11/1238700/logo-gadjian.png'
              width='150'
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text
              className='d-flex align-items-center'
              style={{ fontSize: '20px' }}
            >
              Halo,{" "}<span style={{ color: 'teal' }}>Gadjian User</span>
              <div
                style={{
                  height: '8vh',
                  aspectRatio: '1/1',
                  backgroundColor: 'red',
                  borderRadius: '100%',
                  marginLeft: '10px',
                  overflow: 'hidden',
                }}
                className='d-flex align-items-center justify-content-center'
              >
                <Image
                  src='https://picsum.photos/id/1011/367/267'
                  width='150'
                />
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

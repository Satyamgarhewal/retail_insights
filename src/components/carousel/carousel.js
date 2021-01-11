import { React } from 'react';
import { Carousel } from 'react-bootstrap';

const HomePageCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{ height: '500px' }}>
          <img
            style={{ height: '400px', width: '100%' }}
            src={'assets/img/avengers-endgame-disney.jpg'}
          />
        </Carousel.Item>

        <Carousel.Item style={{ height: '500px' }}>
          <img
            style={{ height: '400px' }}
            className="d-block w-100"
            // src={'assets/img/batman.jpg'}
            src={
              'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'
            }
          />
        </Carousel.Item>

        <Carousel.Item style={{ height: '500px' }}>
          <img
            style={{ height: '400px' }}
            className="d-block w-100"
            src={'assets/img/civilwar.png'}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePageCarousel;

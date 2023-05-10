import React from "react";
import { Button, Card, CardGroup, Container, Nav } from "react-bootstrap";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className=" header row mt-1 mx-2 rounded-md py-lg-5 bg-title bg-no-repeat bg-cover bg-center">
        <div className="col-lg-6 col-md-8 mx-auto backdrop-blur-sm ">
          <p className="lead text-body-secondary text-center text-white font-serif font-extrabold text-xl backdrop-blur-sm">
            This is coding blog website. Website to learn new things and explore
            new technology. A great place to learn language
          </p>
        </div>
      </div>

      <div className="cards">
        <CardGroup className="my-4">
          <Card style={{ margin: "12px" }}>
            <Card.Img
              variant="top"
              className="aspect-video"
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMzczYmF0Y2gxNi1ibG9nYmFubmVyLTA5LmpwZw.jpg"
            />
            <Card.Body>
              <Card.Title>Blockchain Technology</Card.Title>
              <Card.Text>
                Introducing Blockchain - the technology that will revolutionize
                your business. Our roadmap offers a comprehensive solution to
                streamline processes, enhance security and transparency, and
                improve efficiency. With our blockchain implementation, you can
                stay ahead of the game and take your business to the next level.
                Join the blockchain revolution today!
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/block")}>
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ margin: "12px" }}>
            <Card.Img
              variant="top"
              className="aspect-video"
              src="https://as2.ftcdn.net/v2/jpg/01/51/26/75/1000_F_151267526_CCzkZ7cM0p2dTalSL6RQIoDxr2VUXEkZ.jpg"
            />
            <Card.Body>
              <Card.Title>Frontend Development</Card.Title>
              <Card.Text>
                Looking to build stunning web interfaces and applications? Our
                frontend development roadmap covers HTML, CSS, JavaScript, and
                popular frameworks like React and Vue. From beginner to
                advanced, learn how to create beautiful and responsive designs
                with our comprehensive guide. Start building your frontend
                skills today!
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/front")}>
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ margin: "12px" }}>
            <Card.Img
              variant="top"
              className="aspect-video"
              src="https://media.istockphoto.com/id/1338005379/vector/flat-design-backend-of-developer-concept.jpg?s=2048x2048&w=is&k=20&c=mFUonUH4WrA2yfn2VGOXz9ugBpXhi75qfm0pwWMPXMs="
            />
            <Card.Body>
              <Card.Title>Backend Development</Card.Title>
              <Card.Text>
                Are you a student with an exciting Android app idea but don't
                know where to start? Look no further! Our team of experienced
                Android developers can help bring your roadmap to life with
                beautiful designs, efficient code, and seamless user
                experiences. Let us help you turn your dream app into a reality
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/back")}>
                View
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup style={{ display: "flex", flexWrap: "wrap" }}>
          <Card style={{ margin: "12px" }}>
            <Card.Img
              variant="top"
              className="aspect-video"
              src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <Card.Body>
              <Card.Title>Android Development</Card.Title>
              <Card.Text>
                Are you a student with an exciting Android app idea but don't
                know where to start? Look no further! Our team of experienced
                Android developers can help bring your roadmap to life with
                beautiful designs, efficient code, and seamless user
                experiences. Let us help you turn your dream app into a reality
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/andr")}>
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ margin: "12px" }}>
            <Card.Img
              variant="top"
              className="aspect-video"
              src="https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg"
            />
            <Card.Body>
              <Card.Title>Java Development</Card.Title>
              <Card.Text>
                Looking to learn Java development? Our course has got you
                covered! Gain hands-on experience and master Java programming
                concepts. With expert guidance and practical projects, you'll be
                equipped with the skills needed to build powerful and scalable
                applications. Enroll now and start your journey to becoming a
                Java developer!
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/java")}>
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ margin: "12px" }}>
            <Card.Img
              variant="top"
              className="aspect-video"
              src="https://plus.unsplash.com/premium_photo-1674506652942-409ccf9ee0f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80"
            />
            <Card.Body>
              <Card.Title>Cyber Security</Card.Title>
              <Card.Text>
                Protect yourself and your business from cyber threats with our
                comprehensive cybersecurity course. Learn how to prevent and
                respond to cyber attacks, safeguard your sensitive data, and
                secure your network. Sign up today to gain the knowledge and
                skills needed to stay safe in the digital world
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/cyber")}>
                View
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup style={{ display: "flex", flexWrap: "wrap" }}>
          <Card style={{ margin: "12px" }}>
            <Card.Img
              variant="top"
              className="aspect-video"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku6Jfp5TuXEqAU8B3eORY-BxPgPH5ul0jc19eVJqz&s"
            />
            <Card.Body>
              <Card.Title>Flutter</Card.Title>
              <Card.Text>
                Looking to learn app development? Our Flutter course has got you
                covered! With its easy-to-use interface and customizable
                widgets, Flutter is the perfect tool for building beautiful and
                functional apps. Join our course and start creating your own
                apps in no time!
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/flutter")}>
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ margin: "12px" }}>
            <Card.Img
              variant="top"
              className="aspect-video"
              src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
            />
            <Card.Body>
              <Card.Title>UX design</Card.Title>
              <Card.Text>
                Unlock the power of UX design with our comprehensive course.
                Learn the skills and techniques needed to create intuitive and
                user-friendly interfaces that will enhance your user's
                experience. With hands-on experience and personalized feedback,
                our course will equip you with the tools to design exceptional
                user experiences
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/flutter")}>
                View
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ margin: "12px" }}>
            <Card.Img
              variant="top"
              className="aspect-video"
              src="https://blog.eduonix.com/wp-content/uploads/2018/09/Scientific-Python-Scipy.jpg"
            />
            <Card.Body>
              <Card.Title>Python</Card.Title>
              <Card.Text>
                Learn the versatile and popular programming language with our
                Python course! Master the basics of coding, data analysis, web
                development, and more. With hands-on projects and expert
                guidance, you'll be able to develop your own Python programs in
                no time
              </Card.Text>
              <Button variant="primary" onClick={() => navigate("/py")}>
                View
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Home;

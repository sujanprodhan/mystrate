import React, { Component } from "react"
import MetaTags from "react-meta-tags"
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap"
import { Link } from "react-router-dom"

//Lightbox
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import ModalVideo from "react-modal-video"
import "react-modal-video/scss/modal-video.scss"

// import image
import img1 from "../../assets/images/small/img-1.jpg"
import img2 from "../../assets/images/small/img-2.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import img5 from "../../assets/images/small/img-5.jpg"
import img6 from "../../assets/images/small/img-6.jpg"
import img7 from "../../assets/images/small/img-7.jpg"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const images = [img1, img2, img3, img4, img5, img6]

class UiLightboxCommon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: 0,
      isFits: false,
      isEffects: false,
      isGallery: false,
      isGalleryZoom: false,
      isOpen: false,
      isOpen1: false,
      modal_standard: false,
    }
    this.openModal = this.openModal.bind(this)
    this.openModal1 = this.openModal1.bind(this)
    this.tog_standard = this.tog_standard.bind(this)
  }

  tog_standard() {
    this.setState(prevState => ({
      modal_standard: !prevState.modal_standard,
    }))
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  openModal1() {
    this.setState({ isOpen1: true })
  }

  render() {
    const { photoIndex } = this.state
    const {lightImage} = this.props;
    return (
      <React.Fragment>
        {this.state.isFits ? (
          <Lightbox
            mainSrc={images[photoIndex]}
            enableZoom={false}
            imageCaption={
              "Caption. Can be aligned it to any side and contain any HTML."
            }
            onCloseRequest={() => this.setState({ isFits: false })}
          />
        ) : null}

        {this.state.isEffects ? (
          <Lightbox
            mainSrc={lightImage}
            enableZoom={false}
            onCloseRequest={() => this.setState({ isEffects: false })}
          />
        ) : null}

        {this.state.isGallery ? (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            enableZoom={false}
            onCloseRequest={() => this.setState({ isGallery: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
            imageCaption={"Project " + parseFloat(photoIndex + 1)}
          />
        ) : null}

        {this.state.isGalleryZoom ? (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isGalleryZoom: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        ) : null}

        {/* <img
            src={img1}
            onClick={() =>
            this.setState({ isGallery: true, photoIndex: 0 })
            }
            alt=""
            width="120"
        /> */}
        <img
          onClick={() => this.setState({ isEffects: true })}
          className="rounded-circle avatar-xs img-fluid"
          alt=""
          src={lightImage}
        />
      </React.Fragment>
    )
  }
}

export default UiLightboxCommon

import ImageDark from './imgs/image-about-dark.jpg';
import ImageLight from './imgs/image-about-light.jpg';
import Innovative from './imgs/desktop-image-hero-1.jpg';
import AllGlobe from './imgs/desktop-image-hero-2.jpg';
import BestMaterials from './imgs/desktop-image-hero-3.jpg'

const data = {
  hero: [
    {
      title: 'Discover innovative ways to decorate',
      description:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
      imgSrc: Innovative,
      alt: "High quality furniture in wood and white lacquer paint"
    },
    
    {
      title: 'We are available all across the globe',
      description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      imgSrc: AllGlobe,
      alt: "Colorful armless chairs with fine wood seat and metal support structure"
    },
    {
      title: 'Manufactured with the best materials',
      description:
        'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
      imgSrc: BestMaterials,
      alt: "All black foldable chair in leather with metal sctructure"
    }
  ],
  about: {
    imgDarkSrc: ImageDark,
    imgDarkAlt:
      '3d image of a sofisticated room, with circular center wood table and an armchair in black linen fabric with inox thin circular arms',
    title: 'About our furniture',
    description:
      'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.',
    imgLightSrc: ImageLight,
    imgLightAlt: ''
  }
};

export default data;

function productNewArrival() {
  return {
    products: [
      {
        id: 1,
        image: "./assets/new arrival/new1.png",
        name: "T-shirt with Tape Details",
        rating: 4.5,
        price: "Rp. 1.249.000",
      },
      {
        id: 2,
        image: "./assets/new arrival/new2.png",
        name: "F.C. Barcelona Academy ",
        rating: 4.9,
        price: "Rp. 949.000",
      },
      {
        id: 3,
        image: "./assets/new arrival/new3.png",
        name: "Nike Sportswear",
        rating: 4.3,
        price: "Rp. 949.000",
      },
      {
        id: 4,
        image: "./assets/new arrival/new4.png",
        name: "Kobe",
        rating: 4,
        price: "Rp. 849.000",
      },
      {
        id: 5,
        image: "./assets/new arrival/new5.png",
        name: "Vertical Striped Shirt",
        rating: 5,
        price: "Rp. 930.000",
      },
      {
        id: 6,
        image: "./assets/new arrival/new6.png",
        name: "Courage Graphic T-shirt",
        rating: 4.8,
        price: "Rp. 1.149.000",
      },
      {
        id: 7,
        image: "./assets/new arrival/new7.png",
        name: "Nike Air Zoom Pegasus",
        rating: 5,
        price: "Rp. 1.299.000",
      },
      {
        id: 8,
        image: "./assets/new arrival/new8.png",
        name: "Nike Sportswear",
        rating: 4.5,
        price: "Rp. 849.000",
      },
    ],
  };
}

function productBestSeller() {
  return {
    products: [
      {
        id: 1,
        image: "./assets/best seller/best1.png",
        name: "Vertical Striped Shirt",
        rating: 4.9,
        price: "Rp. 849.000",
      },
      {
        id: 2,
        image: "./assets/best seller/best2.png",
        name: "Club Fleece",
        rating: 4.5,
        price: "Rp. 450.000",
      },
      {
        id: 3,
        image: "./assets/best seller/best3.png",
        name: "Loose Fit Bermuda Shorts",
        rating: 5,
        price: "Rp. 549.000",
      },
      {
        id: 4,
        image: "./assets/hero/hero2.png",
        name: "Older Kids",
        rating: 4,
        price: "Rp. 649.000",
      },
    ],
  };
}

function stylistAdvantages() {
  return {
    advantages: [
      {
        id: 1,
        number: "200+",
        title: "International Brands",
      },
      {
        id: 2,
        number: "3.000+",
        title: "High-Quality Products",
      },
      {
        id: 3,
        number: "13.000+",
        title: "Happy Customers",
      },
    ],
  };
}

function productPreview() {
  return {
    products: [
      { id: 1, image: "./assets/hero/hero.png" },
      { id: 2, image: "./assets/hero/hero3.jpg" },
      { id: 3, image: "./assets/hero/hero2.png" },
      { id: 4, image: "./assets/hero/hero4.jpg" },
      { id: 5, image: "./assets/hero/hero12.png" },
      { id: 6, image: "./assets/hero/hero6.png" },
      { id: 7, image: "./assets/hero/hero13.jpg" },
      { id: 8, image: "./assets/hero/hero8.jpg" },
      { id: 9, image: "./assets/hero/hero9.jpg" },
      { id: 10, image: "./assets/hero/hero10.png" },
      { id: 11, image: "./assets/hero/hero11.png" },
      { id: 12, image: "./assets/hero/hero13.jpg" },
      
    ],
    currentIndex: 0,
    visibleSlides: 5, 
    nextSlide() {
      if (this.currentIndex < this.products.length - this.visibleSlides) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  };
}


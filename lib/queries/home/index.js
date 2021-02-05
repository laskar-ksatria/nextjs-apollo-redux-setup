import { gql } from '@apollo/client';

export const Q_HOME_PRODUCT = gql`{
  product(id: 7, session_id: "asda", language: "en") {
    id
    title
    slug
    images
    manage_stock
    price
    sell_price
    is_wishlist
    is_vto
    rate
    video
    brand {
      id
      title
      slug
      is_featured
    }
    firstcategory {
      id
      title
      slug
      description
    }
    description
    tips
    options {
      key
      title
      values {
        title
        value
        color
      }
    }
    skus {
      id
      option_detail_key1
      option_detail_key2
      sku_code
      stock
      price
      sell_price
      weight
      width
      length
      height
      image_no
      description
    }
    relateds {
      id
      title
    }
  }
}`
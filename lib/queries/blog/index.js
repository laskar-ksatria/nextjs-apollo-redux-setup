import { gql } from '@apollo/client';

export const Q_BLOGS = gql`
{
  blogs(language: "ID", category_id: 1) {
    datas {
      id
      title
      slug
      image
    }
  }
}`
import React, { useState } from 'react'
import styles from './index.module.scss'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Mail, Rss, GitHub, Send } from 'react-feather'

export default function Sider (props) {

  const { active } = props

  const [menuList] = useState([
    {
      id: 0,
      title: '🏠Home',
      path: '/'
    },
    {
      id: 1,
      title: '❤️About',
      path: '/about'
    },
    {
      id: 2,
      title: '🔍Search',
      path: '/search'
    },
    {
      id: 3,
      title: '🔗Links',
      path: '/links'
    }
  ])

  const { avatarImage, siderData } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "avatar.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      siderData: allMarkdownRemark {
        nodes {
          frontmatter {
            categories
            tags
            date
          }
        }
        totalCount
      }
    }
  `)

  let categories = []
  let tags = []
  siderData.nodes.forEach(item => {
    if (item.frontmatter.tags) {
      tags.push(...item.frontmatter.tags)
    }
    if (item.frontmatter.categories) {
      categories.push(...item.frontmatter.categories)
    }
  })
  categories = [...new Set(categories)]
  tags = [...new Set(tags)]

  return <aside className={styles.sider}>
    <header className={styles.profileCard}>
      <Img className={styles.avatar} imgStyle={{ borderRadius: '50%', padding: '2px' }} fluid={avatarImage.childImageSharp.fluid} />
      <h3 className={styles.name}>
        <Link to='/' className={styles.link}>
          Johnson
        </Link>
      </h3>
      <p className={styles.motto}>
        行到水穷处 坐看云起时
      </p>
    </header>
    <div className={styles.tabsCard}>
      <ul className={styles.tabList}>
        <li className={`${styles.tabItem} ${active === '/archives' ? styles.active : ''}`}>
          <Link to='/archives'>
            <div className={styles.count}>{siderData.totalCount}</div>
            <div className={styles.title}>归档</div>
          </Link>
        </li>
        <li className={`${styles.tabItem} ${active === '/categories' ? styles.active : ''}`}>
          <Link to={`/categories/${categories[0]}`}>
            <div className={styles.count}>{categories.length}</div>
            <div className={styles.title}>分类</div>
          </Link>
        </li>
        <li className={`${styles.tabItem} ${active === '/tags' ? styles.active : ''}`}>
          <Link to='/tags'>
            <div className={styles.count}>{tags.length}</div>
            <div className={styles.title}>标签</div>
          </Link>
        </li>
      </ul>
    </div>
    <nav className={styles.menuList}>
      {
        menuList.map(item => (
          <Link className={`${styles.menuItem} ${active === item.path ? styles.active : ''}`} key={item.id} to={item.path}>{item.title}</Link>
        ))
      }
    </nav>
    <footer className={styles.footer}>
      <div className={styles.snsList}>
        <a href='mailto:598465252@qq.com' target='_blank' rel="noopener noreferrer nofollow" title='598465252@qq.com' className={styles.snsItem}>
          <Mail size={20} strokeWidth={3} />
        </a>
        <a href='/rss.xml' target='_blank' rel="noopener noreferrer nofollow" className={styles.snsItem}>
          <Rss size={20} strokeWidth={3} />
        </a>
        <a href='https://github.com/YES-Lee' target='_blank' rel="noopener noreferrer nofollow" className={styles.snsItem}>
          <GitHub size={20} strokeWidth={3} />
        </a>
        <a href='https://t.me/JohnsonLe' target='_blank' rel="noopener noreferrer nofollow" className={styles.snsItem}>
          <Send size={20} strokeWidth={3} />
        </a>
      </div>
      <div className={styles.copyright}>
        <span>©️{ new Date().getFullYear() }</span>
        ❤️
        <Link to='/' className={styles.author}>Johnson</Link>
      </div>
      <p className={styles.beian}>
        <a href='http://www.beian.miit.gov.cn/' target='_blank' rel="noopener noreferrer">
          滇ICP备16003902号
        </a>
      </p>
    </footer>
  </aside>
}

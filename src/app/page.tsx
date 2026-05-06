import Image from "next/image";
import styles from "./page.module.scss";
import { blogPostContent } from "./blog-post-content";

const navItems = [
  {
    name: "WORK",
    href: "#",
  },
  {
    name: "CAPABILITY",
    href: "#",
  },
  {
    name: "TEAM",
    href: "#",
  },
  {
    name: "CONTACT",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.navContainer}>
        {navItems.map((item) => (
          <a key={item.name} href={item.href}>
            {item.name}
          </a>
        ))}
      </div>
      <main className={styles.main}>
        <section className={styles.headerContainer}>
          <h1 className={styles.headerTitle}>JOURNAL</h1>
          <span className={styles.headerSubtitle}>
            With our diverse blend of in-house skills, we take brands the whole
            nine yards. We are a full-service studio where anything is possible
            and nothing is off limits.
          </span>
        </section>
        <div className={styles.featureContainer}>
          <div className={styles.featureImageContainer}>
            <Image
              src="/assets/feature-02.png"
              alt="Feature Image"
              className={styles.featureImage}
              fill
            />
          </div>
          <div className={styles.featureTextContainer}>
            <span className={styles.date}>27 MAY 2026</span>
            <div className={styles.featureCategories}>
              <span className={styles.categoryTag}>ENGINEERING</span>
              <span className={styles.categoryTag}>PRODUCTIVITY</span>
              <span className={styles.categoryTag}>CASE STUDY</span>
            </div>
            <h2 className={styles.featureTitle}>
              THE ARCHITECTURE OF HIGH-PERFORMANCE WORKFLOWS
            </h2>
            <span className={styles.featureSubtitle}>
              Blending sharp visual design with performance-first engineering to
              create fast, scalable digital experiences that look refined and
              feel effortless across every interaction.
            </span>
            <div className={styles.featureMeta}>
              <span>By ALEX REYES</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
        <section className={styles.blogListContainer}>
          <div className={styles.blogListHeader}>
            <h3>LATEST POSTS</h3>
            <span>{blogPostContent.length} articles</span>
          </div>
          <div className={styles.blogGrid}>
            {blogPostContent.map((post) => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.blogCardImageContainer}>
                  <Image
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    className={styles.blogCardImage}
                    fill
                  />
                </div>
                <div className={styles.blogCardBody}>
                  <div className={styles.blogCardCategories}>
                    {post.categories.map((category) => (
                      <span
                        key={`${post.id}-${category}`}
                        className={styles.blogCardCategoryTag}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <span className={styles.date}>{post.date}</span>
                  <h4 className={styles.blogCardTitle}>{post.title}</h4>
                  <p className={styles.blogCardSubtitle}>{post.subtitle}</p>
                  <div className={styles.blogCardMeta}>
                    <span>By {post.author}</span>
                    <span>{post.authorRole}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <footer className={styles.footerContainer}>
          <div className={styles.footerLeft}>
            <h5 className={styles.footerTitle}>© PLAYGROUND STUDIO 2026</h5>
            <p className={styles.footerAcknowledgement}>
              We acknowledge First Nations peoples as the traditional custodians
              of lands, seas and waters throughout Australia. Our studio stands
              on the land of the Boon Wurrung people of the Kulin Nation, and
              we pay our respects to their elders past and present.
            </p>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.footerLinksColumn}>
              <a href="#">HOME</a>
              <a href="#">WORK</a>
              <a href="#">CAPABILITY</a>
              <a href="#">TEAM</a>
              <a href="#">CONTACT</a>
            </div>
            <div className={styles.footerLinksColumn}>
              <a href="#">INSTAGRAM</a>
              <a href="#">LINKEDIN</a>
              <a href="#">PRIVACY POLICY</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

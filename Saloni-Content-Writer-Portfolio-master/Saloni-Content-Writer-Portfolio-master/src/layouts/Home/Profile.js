import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large1.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hi, I’m Rishita Badole, a technical content writer with a strong foundation in
      computer applications and a growing passion for software engineering concepts. I
      love turning complex technical ideas into clear, engaging content that informs and
      inspires. With a curiosity driven by reading and a preference for understanding
      technology through written material rather than visuals, I find joy in continuous
      learning and sharing that knowledge through impactful writing.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In addition to my current role as a Technical Content Writer at Angular Minds, where
      I contribute to content related to development and AI technologies like React,
      Angular, and Generative AI. I am also aspiring to grow as a freelance content
      writer. My experience revolves around creating technical content that supports
      businesses and educates clients—especially those eager to understand services deeply
      and apply technical knowledge effectively.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Apart from technical services and writing, some other activities that I love to do!
    </Text>
    <Text data-visible={visible} size="l" as="p">
      🎯 Singing
    </Text>
    <Text data-visible={visible} size="l" as="p">
      🎯 Teaching
    </Text>
    <Text data-visible={visible} size="l" as="p">
      🎯 Blabbering at times!
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Know Who I&#39;m
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <Image
                  placeholder={profileImgPlaceholder}
                  srcSet={profileKatakana}
                  className={styles.profileText}
                  style={{
                    top: '-110px',
                    left: '91px',
                    scale: '0.85',
                    transform: 'rotate(90deg)',
                  }}
                  alt="My image"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

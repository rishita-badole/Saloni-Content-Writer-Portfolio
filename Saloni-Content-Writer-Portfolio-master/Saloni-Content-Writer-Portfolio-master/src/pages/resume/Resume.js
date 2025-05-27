import { PDFViewer } from 'components/PDFViewer';
import { Post } from 'layouts/Post';
import styles from './Resume.module.css';

export const Resume = () => {
  return (
    <div className={styles.resume}>
      <Post
        title="Resume"
        href="https://drive.google.com/file/d/1UjPsgpeNk8JrHg8fIB650T9RqKlFalH7/view?usp=sharing"
      >
        <PDFViewer
          resume={true}
          pdfLink="https://drive.google.com/file/d/1UjPsgpeNk8JrHg8fIB650T9RqKlFalH7/preview.pdf"
        />
      </Post>
    </div>
  );
};

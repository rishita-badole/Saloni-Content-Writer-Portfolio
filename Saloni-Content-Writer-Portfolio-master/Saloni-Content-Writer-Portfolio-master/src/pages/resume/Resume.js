import { PDFViewer } from 'components/PDFViewer';
import { Post } from 'layouts/Post';
import styles from './Resume.module.css';

export const Resume = () => {
  return (
    <div className={styles.resume}>
      <Post
        title="Resume"
        href="Content writer - Rishita Badole (2).pdf"
      >
          <p>Test</p>
        <PDFViewer
          resume={true}
          pdfLink="Content writer - Rishita Badole (2).pdf"
        />
      </Post>
    </div>
  );
};

import { Helmet } from '@modern-js/runtime/head';
import './index.css';
import Button from '@/components/button/PrimaryButton';

const Index = () => (
  <>
    <div className="container-box">
      <h1>Design System</h1>
      <Button text="DS Button" />
    </div>
  </>
);

export default Index;

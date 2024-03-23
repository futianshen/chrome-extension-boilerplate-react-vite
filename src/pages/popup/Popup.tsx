import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import { Button } from '@src/components/ui/button';
import { Input } from '@src/components/ui/input';

const Popup = () => {
  return (
    <div className="App">
      <header className="flex flex-col">
        <Button variant="default">Button</Button>
        <Input placeholder="Input" />
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);

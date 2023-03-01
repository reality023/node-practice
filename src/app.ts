const myDecorator = (target: any, key: any, descriptor: any) => {
  const fn = descriptor.value || descriptor.initializer.call(this);

  descriptor.value = function (...args: any[]) {
    console.log('==================================');
    console.log('target.consturtor: ', target.constructor);
    console.log('key: ', key);
    console.log('descriptor: ', descriptor);
    console.log('==================================');

    fn.call(this, args);
  };
};

class MyClass {
  @myDecorator
  doSomething() {
    console.log("I'm doing some work!");
  }
}

const instance = new MyClass();
instance.doSomething();

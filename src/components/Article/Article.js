import "./Article.css";

function Article() {
  return (
    <>
      <article>
        <figure>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Bdz6s4_QyPto9ddw"
            alt="Computer"
            class="imgarticle"
          />
          <figcaption>
            Photo by{" "}
            <a href="https://unsplash.com/@clemhlrdt?utm_source=medium&utm_medium=referral">
              Clément Hélardot
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/?utm_source=medium&utm_medium=referral">
              Unsplash
            </a>
          </figcaption>
        </figure>
        <br></br>
        <p>
          When we begin a project, we tend to focus on things like scalability,
          usability, availability, security, and others. But, as the application
          grows, we may observe a decline in its speed and performance. It is
          often only at this point that we recognize the need for optimization.
        </p>
        <br></br>
        <p>
          In this article, we will present some of the most common techniques
          for optimizing code, which can be implemented in any application; we
          will also show optimization techniques using sample code written in{" "}
          <a href="https://react.dev/">JavaScript</a> and{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            React
          </a>
          . The following techniques are gonna be covered:
        </p>
        <br></br>
        <ul>
          <li>Debouncing</li>
          <li>Throttling</li>
          <li>Memoization</li>
          <li>Pure Components</li>
          <li>Lazy Loading</li>
          <li>Virtualization (or Windowing)</li>
          <li>Error Boundaries</li>
          <li>Inline Functions</li>
        </ul>
        <br></br>
        <p>
          There are many more techniques available, but in this article, we will
          focus on the ones already mentioned.
        </p>
        <br></br>
        <section>
          <h2>Debouncing</h2>
          <p>
            Debouncing is a programming technique used to optimize the
            processing of functions that consume a lot of execution time. This
            technique involves preventing those functions from executing
            repeatedly without control, which helps improve the performance of
            our applications.
          </p>
          <br></br>
          <p>
            In the case of applications that must respond to certain user
            actions, we often cannot avoid certain functions from being executed
            repeatedly. For example, events such as <code>mousemove</code> or{" "}
            <code>window.resize</code> can trigger hundreds of calls to these
            functions with a simple mouse movement or browser window resizing.
            It is in these cases that we resort to techniques like Debouncing to
            limit these calls and solve performance issues that may be caused by
            such events or functions.
          </p>
          <br></br>
          <p>
            The operation of Debouncing is quite simple. It involves creating a
            function that acts as an interceptor to limit the call to the
            callback function we want to optimize. This function will have at
            least two parameters: <code>time</code> and <code>callback</code>.
            The <code>time</code> parameter is used to indicate to the Debounce
            how long the function should wait before being called, and the{" "}
            <code>callback</code> parameter is the function that will be
            conditioned to this time limit. Once the control mechanism is
            created, the <code>debounce</code> function returns a new optimized
            function that will serve in place of the original function.
          </p>
          <br></br>
          <p>
            It is worth noting that in Debouncing, if multiple calls to the
            callback occur within the defined time window, only the last call
            will be considered for execution and the previous ones will be
            discarded. Additionally, while this is happening, the time window
            will also be renewed each time a call occurs. For example, if we
            define the time as 2 seconds, the callback defined in the{" "}
            <code>debounce</code> function will only be executed after 2
            seconds. If multiple calls occur within the time window, the time
            will be renewed for the same period, and only the last function that
            entered the <code>debounce</code> function will be executed once the
            defined time is met.
          </p>
          <br></br>
          <p>
            Here is a simple example of how to implement Debouncing in code
            using JavaScript:
          </p>
          <br></br>
          <div class="code">
            <pre>
              <code>{`// Example 1

const debounce = (callback, time = 300) => {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, time);
  };
};
`}</code>
            </pre>
          </div>
          <br></br>
          <p>
            In this simplified version, the <code>debounce</code> function
            returns another function that will handle the debounce. The returned
            function clears the timer variable of any previously created timeout
            and sets a new timeout with the <code>callback</code> it received as
            a parameter. Each time the new debounced function is executed, it
            will access the same timer variable, clear it, and replace the
            timeout each time.
          </p>
          <br></br>
          <p>
            Thus, we have created our debounce, and the way to use it would be
            as follows:
          </p>
          <br></br>
          <div class="code">
            <pre>
              <code>{`// Example 2

// this is the function we want to debounce
const showMessage = () => console.log("Hello Message");

// this is the debounced function with 1 second of delay
const debouncedMessage = debounce(showMessage, 1000);

// we are calling it 10000 times in this loop
for (let i = 0; i < 10000; i++) {
  setTimeout(debouncedMessage, i);
}
`}</code>
            </pre>
          </div>
          <br></br>
          <p>
            In this example, the <code>debouncedMessage</code> function will be
            called 10,000 times in a <code>for</code> loop. However, due to the
            debounce, the message will only be displayed once instead of 10,000
            times.
          </p>
        </section>
      </article>
      <br></br>
      <br></br>
    </>
  );
}

export default Article;

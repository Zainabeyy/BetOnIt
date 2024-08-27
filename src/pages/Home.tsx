import Header from "../component/Header";
import Users from "../component/User";
import Features from "../component/Features";

export default function Home() {
  return (
    <div> 
      <Header />
      <main>
        <article>
          <Users />
        </article>
        <article>
          <Features />
        </article>
      </main>
    </div>
  );
}

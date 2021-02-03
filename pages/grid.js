import styles from '../styles/grid.module.css';

export default function Grid() {
  return (
    <div id="container" className={styles.container}>
      <header className={styles.header}>Header</header>

      <section className={styles.aside}>Aside</section>

      <nav className={styles.nav}>nav</nav>

      <main className={styles.main}>
        Main
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores assumenda
          atque, autem, consequuntur cupiditate dolor doloribus eos harum hic ipsum itaque maiores,
          mollitia numquam odio repudiandae rerum saepe!
        </div>
        <div>
          Accusamus accusantium consequatur cumque earum eos eum expedita facere facilis ipsum iste,
          iusto molestiae nam quia repellat saepe similique tempora. Architecto aspernatur ducimus
          fuga necessitatibus, porro soluta? Incidunt, quas sunt.
        </div>
        <div>
          Animi aperiam asperiores commodi distinctio, dolor enim facilis fugiat incidunt iste
          itaque iusto minima nemo nostrum, odio officiis, pariatur quae quam quas quasi repellat
          soluta suscipit tempore ut. Modi, vel.
        </div>
        <div>
          Ab blanditiis consequuntur cumque enim explicabo in laudantium nostrum placeat sit!
          Aliquid consequuntur debitis dolorum hic illum in inventore minus nam odio officia, omnis
          perferendis quas ratione recusandae, suscipit voluptate.
        </div>
        <div>
          A ab amet animi consectetur corporis culpa debitis, doloremque eius enim eveniet ex
          exercitationem laudantium libero magnam molestiae odit officiis optio pariatur quasi
          quidem sit suscipit unde vel! Hic, minus.
        </div>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

import Head from 'next/head'
import { ProductData } from 'typings/product'
import styles from '@/styles/Home.module.css'
import ProductCard from 'Components/ProductCard'

const products: ProductData[] = [
  {
    name: 'KIT COFFRET LADY MILLION FABULOUS INTENSE FEMININO de PACO RABANNE Eau da Parfum - 01 EAU de PARFUM 80ml + 01 BODY LOTION 100ml',
    value: 550,
    discount: 0.1,
    maxInstallments: 5,
    imgSrc: 'https://www.cellshop.com/11418565-thickbox_default/perfume-ferrari-black-edt-125ml-masculino.jpg',
  },
  {
    name: '212 VIP Rosé',
    value: 740,
    discount: 0.07,
    maxInstallments: 5,
    imgSrc: 'https://www.laquisme.com.br/image/cache/data/produtos/1marcas/perfume-feminino/carolina-herrera/carolina-herrera---212-vip-rose-edp-30ml-01-2022-10-11-14-36-05-1000x1000.jpg',
  },
  {
    name: 'Animale for men',
    value: 330,
    discount: 0.05,
    maxInstallments: 3,
    imgSrc: 'https://www.giraofertas.com.br/wp-content/uploads/2017/01/Animale_For_Men_04.jpg',
  },
  {
    name: 'Scandal de Jean Paul',
    value: 500,
    discount: 0,
    maxInstallments: 5,
    imgSrc: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/237929-320-320/scandal-jean-paul-gaultier-perfume-feminino-eau-de-parfum2.jpg?v=636426200517800000',
  },
  {
    name: 'Ferrari Black',
    value: 550,
    discount: 0.1,
    maxInstallments: 5,
    imgSrc: 'https://www.cellshop.com/11418565-thickbox_default/perfume-ferrari-black-edt-125ml-masculino.jpg',
  },
  {
    name: '212 VIP Rosé',
    value: 740,
    discount: 0.07,
    maxInstallments: 5,
    imgSrc: 'https://www.laquisme.com.br/image/cache/data/produtos/1marcas/perfume-feminino/carolina-herrera/carolina-herrera---212-vip-rose-edp-30ml-01-2022-10-11-14-36-05-1000x1000.jpg',
  },
  {
    name: 'Animale for men',
    value: 330,
    discount: 0.05,
    maxInstallments: 3,
    imgSrc: 'https://www.giraofertas.com.br/wp-content/uploads/2017/01/Animale_For_Men_04.jpg',
  },
  {
    name: 'Scandal de Jean Paul',
    value: 500,
    discount: 0,
    maxInstallments: 5,
    imgSrc: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/237929-320-320/scandal-jean-paul-gaultier-perfume-feminino-eau-de-parfum2.jpg?v=636426200517800000',
  },
  {
    name: 'Ferrari Black',
    value: 550,
    discount: 0.1,
    maxInstallments: 5,
    imgSrc: 'https://www.cellshop.com/11418565-thickbox_default/perfume-ferrari-black-edt-125ml-masculino.jpg',
  },
  {
    name: '212 VIP Rosé',
    value: 740,
    discount: 0.07,
    maxInstallments: 5,
    imgSrc: 'https://www.laquisme.com.br/image/cache/data/produtos/1marcas/perfume-feminino/carolina-herrera/carolina-herrera---212-vip-rose-edp-30ml-01-2022-10-11-14-36-05-1000x1000.jpg',
  },
  {
    name: 'Animale for men',
    value: 330,
    discount: 0.05,
    maxInstallments: 3,
    imgSrc: 'https://www.giraofertas.com.br/wp-content/uploads/2017/01/Animale_For_Men_04.jpg',
  },
  {
    name: 'Scandal de Jean Paul',
    value: 500,
    discount: 0,
    maxInstallments: 5,
    imgSrc: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/237929-320-320/scandal-jean-paul-gaultier-perfume-feminino-eau-de-parfum2.jpg?v=636426200517800000',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Thayllus</title>
        <meta name="description" content="Loja de perfumes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.container}>
        <div className={styles.highlightCotainer}>
          <h3 className={styles.highlightTitle}>Destaques</h3>
          <hr className={styles.highlightDivider} />
        </div>

        <div className={styles.productsContainer}>
          {products.map((product, id) => (
            <ProductCard key={id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

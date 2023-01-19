import { FC } from "react"
import { ProductData } from "typings/product"
import styles from './styles.module.css'
import Image from 'next/image'

function formatPrice(price: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)
}

interface Props {
  product: ProductData
}

const ProductCard: FC<Props> = ({ product }) => {
  const finalValue = product.value * (1 - product.discount)
  const installment = product.maxInstallments && finalValue / product.maxInstallments

  return (
    <a className={styles.container} href="/">
      <div className={styles.imageContainer}>
        <Image src={product.imgSrc} alt="Imagem do perfume" width={150} height={150} />
      </div>
      <div className={styles.detailsContainer}>
        <h3 className={styles.productName}>{product.name}</h3>
        <span className={styles.productPrice}>
          {formatPrice(finalValue)}
        </span>
        {product.maxInstallments && (
          <span className={styles.installment}>
            {`ou ${product.maxInstallments}x de ${formatPrice(installment)}`}
          </span>
        )}
      </div>
    </a>
  )
}

export default ProductCard

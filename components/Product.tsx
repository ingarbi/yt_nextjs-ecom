import Link from "next/link"

type Props = {
    product: Product
}

const Product = ({product}: Props) => {
  return (
    <Link href={`/product/${product.id}`}>
        <div>

        </div>
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
        </div>
    </Link>
  )
}

export default Product
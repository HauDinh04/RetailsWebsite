import { closeModal } from '@/redux/features/product/product_modal.slice';
import { ProductModal } from './ProductModal';
import { RootState } from '@/redux/store';
import { useSelector, useDispatch } from 'react-redux';

export const ProductModalRedux = () => {
  const { isOpen, product } = useSelector((state: RootState) => state.productModal);
  const dispatch = useDispatch();

  return (
    <ProductModal
      isOpen={isOpen}
      onClose={() => dispatch(closeModal())}
      thumbnail_url={product?.thumbnail_url || ''}
      images={product?.images || []}
      name={product?.name || ''}
      description={product?.description || ''}
      price={product?.price || 0}
      discount_price={product?.discount_price || 0}
      star={product?.star || 0}
      in_stock={product?.in_stock || false}
      sku={product?.sku || ''}
    />
  );
};

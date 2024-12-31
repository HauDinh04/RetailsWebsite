import Image from 'next/image';
import { FaReply } from 'react-icons/fa';

export function MainComment({
  name,
  datetime,
  content,
  children
}: {
  name: string;
  datetime: string;
  content: string;
  children?: React.ReactNode;
}) {
  function formatDateTime(dateString: string): string {
    const dateObj = new Date(dateString);
    if (isNaN(dateObj.getTime())) {
      return '';
    }
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(dateObj);
  }

  return (
    <>
      <div className='flex gap-4 text-[12px] mb-8 last:mb-0'>
        <div className='p-[4px] border h-fit'>
          <Image
            src='https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/market/Destino_HTML_main_file/Code_v1.0/destino_html_pl_v1.0/img/demo/blog/avata1.jpg'
            alt=''
            className='w-[70px] h-[70px] max-w-none'
            
          />
        </div>
        <div className='w-full'>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center'>
              <div className='text-[16px]'>{name || 'Unknown'}</div>
              <div className='ms-[15px] text-gray-600'>{formatDateTime(datetime)}</div>
            </div>
            <FaReply className='cursor-pointer text-[18px]' />
          </div>
          <div className='text-gray-600'>{content}</div>

          {/* REPLY */}
          {children}
        </div>
      </div>
    </>
  );
}

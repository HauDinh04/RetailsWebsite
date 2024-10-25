"use client";

import Link from "next/link";
import React,{ useState }  from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import AccordionGroup from "./AccordionGroup";


const FAQ = () => {
	const ListAccordionGroup=[
		{
			id: 1,
			title:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
			label1:'Fusce eu dui. Integer vel nibh sit amet turpis vulputate aliquet. Phasellus id nisi vitae odio pretium aliquam. Pellentesque a leo. Donec consequat lectus sed felis. Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec et mi eu massa ultrices scelerisque.',
			label2:'Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi.'
		},
		{
			id: 2,
			title:'Donec eros tellus scelerisque nec rhoncus eget laoreet sit amet',
			label1:'Fusce eu dui. Integer vel nibh sit amet turpis vulputate aliquet. Phasellus id nisi vitae odio pretium aliquam. Pellentesque a leo. Donec consequat lectus sed felis. Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec et mi eu massa ultrices scelerisque.',
			label2:'Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi.'
		},
		{
			id: 3,
			title:'Curabitur molestie euismod erat. Proin eros odio?',
			label1:'Fusce eu dui. Integer vel nibh sit amet turpis vulputate aliquet. Phasellus id nisi vitae odio pretium aliquam. Pellentesque a leo. Donec consequat lectus sed felis. Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec et mi eu massa ultrices scelerisque.',
			label2:'Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi.'
		},
		{
			id: 4,
			title:'In scelerisque sem at dolor. Maecenas mattis',
			label1:'Fusce eu dui. Integer vel nibh sit amet turpis vulputate aliquet. Phasellus id nisi vitae odio pretium aliquam. Pellentesque a leo. Donec consequat lectus sed felis. Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec et mi eu massa ultrices scelerisque.',
			label2:'Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi.'
		},
		{
			id: 5,
			title:'Nunc feugiat mi a tellus consequat imperdiet',
			label1:'Fusce eu dui. Integer vel nibh sit amet turpis vulputate aliquet. Phasellus id nisi vitae odio pretium aliquam. Pellentesque a leo. Donec consequat lectus sed felis. Quisque vestibulum massa. Nulla ornare. Nulla libero. Donec et mi eu massa ultrices scelerisque.',
			label2:'Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi.'
		},

	]
	const [show, setShow] = useState<number>(ListAccordionGroup[0].id);
  return (
    <div className="mb-[20px]">
      <ul className="my-5 mb-10">
        <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
          <Link href="" className="hover:text-[#337ab7] ">
            Home
          </Link>
          <span>
            <MdKeyboardArrowRight className="inline-block mx-[10px] size-4" />
          </span>
        </li>
        <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
          <Link href="" className="hover:text-[#337ab7] ">
            Account
          </Link>
          <span>
            <MdKeyboardArrowRight className="inline-block mx-[10px] size-4" />
          </span>
        </li>
        <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
          <Link href="" className="hover:text-[#337ab7] ">
            Page
          </Link>
          <span>
            <MdKeyboardArrowRight className="inline-block mx-[10px] size-4" />
          </span>
        </li>
        <li className="inline-block list-none text-sub-heading items-center text-[#777777]">
            Faq
        </li>
      </ul>
      <div className="text-[#555555] w-full">
        <div className="mb-[23px] text-[#555555]">
          <h3 className="mt-5 mb-[10px] text-heading3 font-normal">
            Got Questions? We’ve Got Answers!
          </h3>
          <p className="mb-[10px] text-sub-heading">
            Asunt in anim uis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in anim id est laborum.
            Allamco laboris nisi ut aliquip ex ea commodo consequat. Aser velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in anim id est laborum.
          </p>
        </div>

        <div className="">
          <ul className="list-none">
			{ListAccordionGroup.map(item=> (
				<AccordionGroup key={item.id} id={item.id} title={item.title} label1={item.label1} label2={item.label2} show={show} setShow={setShow}/>
			))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

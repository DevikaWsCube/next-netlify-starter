import Head from 'next/head'
import Header from '@components/Header'
import './App.css';
import { useState } from 'react';
import Footer from '@components/Footer'

export default function Home() {
  let [Data, setData] = useState('');
  let opr = ['+', '-', '*', '/', '%'];

  let handleClick = (getvalue) => {
    if ((opr.includes(getvalue) || getvalue == '=' || getvalue == 'C' || getvalue == 'X') && Data.length == 0) {
      console.log('invalid input');
    }

    else if(getvalue=='.') {
      if(Data.indexOf('.')==-1) {
        Data = Data+'.'
      }
      // else if(Data.indexOf('.')!=-1){
      //   for(x of Data) {
      //     if(opr.includes(x)) {

      //     }
      //   }
      // }
      // else {
        
      // }
      setData(Data)
      console.log(Data.indexOf('.'));
    }

    else {
      if (getvalue == 'C') {
        setData('')
      }
      else if (getvalue == '=')  {
        if(opr.includes(Data.charAt(Data.length - 1))) {

        }
        else {
          setData(String(eval(Data)));
        }
        
      }

      else if (getvalue == 'X') {
        setData(Data.substring(0, (Data.length) - 1));
      }
      else {
        if (opr.includes(getvalue)) {
          if (opr.includes(Data.charAt(Data.length - 1))) {
            setData(Data.substring(0, (Data.length - 1)) + getvalue);
          }
          else if (Data.charAt(Data.length - 1)=='.') {
            setData(Data.replace(getvalue, ''))
          }
          else {
            Data = Data + getvalue;
            setData(Data)
          }
        }
        else {
          Data = Data + getvalue;
          setData(Data)
        }
      }
    }

  }
   return (
    <>
      <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-purple-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
        <div className="">
          <div className="p-5 text-white text-center text-3xl bg-purple-900"><span className="text-orange-500">Calcu</span>lator</div>

          <div className="p-5 text-white text-right text-3xl bg-purple-800 result"> <span className="text-orange-500"></span>{Data}</div>


          <div className="flex items-stretch bg-purple-900 h-24">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('%')}>%</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('C')}>C</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer"><span className='border border-2 rounded-full px-3 py-1' onClick={() => handleClick('X')}>X</span></div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('/')}>/</div>
            </div>
          </div>

          <div className="flex items-stretch bg-purple-900 h-24">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('7')}>7</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('8')}>8</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('9')}>9</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('*')}>x</div>
            </div>
          </div>

          <div className="flex items-stretch bg-purple-900 h-24">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('4')}>4</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('5')}>5</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('6')}>6</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('-')}>-</div>
            </div>
          </div>

          <div className="flex items-stretch bg-purple-900 h-24">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
                onClick={() => handleClick('1')}>1</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('2')}>2</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('3')}>3</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('+')}>+</div>
            </div>
          </div>


          <div className="flex items-stretch bg-purple-900 h-24 mb-4">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('+')}>+</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('0')}>0</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('.')}>.</div>
            </div>

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div className="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none cursor-pointer" onClick={() => handleClick('=')}>=</div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

'use client';

import { useState } from 'react';

import { useLazyQuery } from '@/lib/graphql-client';

import { graphql } from 'lib/gql';

import { CircularProgressBar } from './pb';

const ExtractSkills = graphql(`
  query ExtractSkills($text: String!, $threshold: Float!) {
    extractSkills(text: $text, threshold: $threshold) {
      name
      value
      mine
    }
  }
`);

function Form() {
  const [text, setText] = useState('');
  const [threshold, setThreshold] = useState(0.3);

  const [extract, { loading, data }] = useLazyQuery(ExtractSkills);

  return (
    <div className="container mx-auto gap-x-8 py-8">
      <div className="flex flex-col gap-y-4">
        <label htmlFor="text" className="text-slate-300">
          Description
        </label>
        <div className="rounded-xl border-2 border-zinc-800 bg-black overflow-hidden h-52">
          <textarea
            onChange={(e) => setText(e.currentTarget.value)}
            className="block rounded-xl bg-black p-8 text-slate-300 w-full h-full"
            placeholder='Please specify your text here. For example: "I am a software engineer with 5 years of experience in React and Node.js."'
            value={text}
          ></textarea>
        </div>

        <div className="flex gap-x-4">
          <select
            placeholder="Threshold (0.3)"
            className="bg-zinc-800 text-slate-300 rounded-xl p-4"
            value={threshold}
            onChange={(e) => {
              setThreshold(parseFloat(e.currentTarget.value));
            }}
          >
            <option value={0}>No threshold</option>
            <option value={0.15}>Very low threshold (0.15)</option>
            <option value={0.3}>Low threshold (0.3)</option>
            <option value={0.45}>Default threshold (0.45)</option>
            <option value={0.5}>High threshold (0.6)</option>
          </select>
          <button
            disabled={loading}
            className="bg-zinc-800 text-slate-300 rounded-xl p-4"
            onClick={() => {
              extract({
                variables: {
                  text,
                  threshold,
                },
              });
            }}
          >
            {loading ? 'Extracting (can take a minute) ...' : 'Submit'}
          </button>
        </div>
        <h2 className="text-slate-200 font-bold">Extracted Skills</h2>
        <div className="rounded-xl border-2 border-zinc-600 bg-zinc-800 overflow-hidden p-8">
          <div className="text-slate-200">
            {data?.extractSkills?.length === 0 &&
              'No skills above the threshold value found'}
            {data?.extractSkills ? (
              <ul className="gap-2 flex flex-col">
                {data?.extractSkills.map((skill) => (
                  <li key={skill.name} className="flex gap-2 items-center">
                    <CircularProgressBar
                      strokeWidth={4}
                      sqSize={40}
                      percentage={Math.floor(skill.mine! * 100)}
                      color={
                        skill.mine! > 0.5
                          ? 'green'
                          : skill.mine! > 0.4
                          ? 'orange'
                          : 'red'
                      }
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            ) : (
              'No skills extracted yet.'
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Fetcher() {
  return <Form />;
}

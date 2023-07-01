import React from "react";

function News() {
  return (
    <div className="h-64 w-72 p-3 border border-t-white rounded-lg shadow-lg bg-white">
      <h5 className="font-bold text-left">Linkedin News 📰</h5>
      <ul class="list-disc ml-6">
        <li className="space-y-1">
          <p className="text-xs font-bold text-left underline">
            Top trends in AI, Machine learning
          </p>
          <p className="text-xs text-left font-light"> Top news 1233 Readers</p>
        </li>
        <li className="space-y-1">
          <p className="text-xs font-bold text-left underline">
            What makes an ad work?
          </p>
          <p className="text-xs text-left font-light ">
            {" "}
            1d ago * 1,467 readers
          </p>
        </li>
        <li className="space-y-1">
          <p className="text-xs font-bold text-left underline">
            HR embraces to AI potential
          </p>
          <p className="text-xs text-left font-light">
            {" "}
            1d ago * 1,467 readers
          </p>
        </li>
        <li className="space-y-1">
          <p className="text-xs font-bold text-left underline">Chat GPT 4</p>
          <p className="text-xs text-left font-light">
            {" "}
            1d ago * 1,467 readers
          </p>
        </li>
        <li className="space-y-1">
          <p className="text-xs font-bold text-left underline">
            What makes an ad work?
          </p>
          <p className="text-xs text-left font-light ">
            {" "}
            1d ago * 1,467 readers
          </p>
        </li>
      </ul>
    </div>
  );
}

export default News;

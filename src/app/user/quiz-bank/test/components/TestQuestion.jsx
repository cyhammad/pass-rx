import React from "react";

export default function TestQuestion() {
  return (
    <div className="z-10 bg-light-gray">
      <h3 className=" font-semibold">
        Which of the following is the mechanism of action of the antiplatelet
        drug that he was most likely given?{" "}
      </h3>
      <p className=" mt-4 text-justify font-light">
        A 54-year-old man comes to the emergency department because of pressure
        in his chest that began 45 minutes ago. The pressure radiates to his
        left arm and jaw. He has a history of hypertension and hyperlipidemia.
        ECG shows ST-segment elevations consistent with myocardial infarction.
        Following administration of aspirin, metoprolol, nitroglycerin, and
        enoxaparin, he is given an oral antiplatelet drug in preparation for
        percutaneous coronary intervention to follow several hours later.
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <div className="bg-pinkish-gray flex gap-x-2 rounded-lg border border-gray-border p-3">
          <p className="text-text-gray">a.</p>
          <p>Direct factor Xa inhibition</p>
        </div>{" "}
        <div className="bg-pinkish-gray flex gap-x-2 rounded-lg border border-gray-border p-3">
          <p className="text-text-gray">b.</p>
          <p>Direct factor Xa inhibition</p>
        </div>
        <div className="bg-pinkish-gray flex gap-x-2 rounded-lg border border-gray-border p-3">
          <p className="text-text-gray">c.</p>
          <p>Direct factor Xa inhibition</p>
        </div>
        <div className="bg-pinkish-gray flex gap-x-2 rounded-lg border border-gray-border p-3">
          <p className="text-text-gray">d.</p>
          <p>Phosphodiesterase inhibition </p>
        </div>
        <div className="bg-pinkish-gray flex gap-x-2 rounded-lg border border-gray-border p-3">
          <p className="text-text-gray">e.</p>
          <p>Inhibits glycoprotein receptors </p>
        </div>
      </div>
    </div>
  );
}

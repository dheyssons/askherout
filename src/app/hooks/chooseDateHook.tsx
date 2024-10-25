import {useState} from 'react'

export function ChooseDateHook(steps: any) {
    const [currentStep, SetCurrentStep] = useState(0);

    function changeStep(i: any, e: any) {
        if(e) e.preventDefault();
        
        if(i < 0 || i >= steps.length) return

        SetCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep
    }
}
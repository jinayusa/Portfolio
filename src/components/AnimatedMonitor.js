// AnimatedMonitor.js
import React, { useRef, useEffect, useState } from 'react';
import {
  MonitorContainer,
  Screen,
  Body,
  Stand,
  StandBase,
  Glow,
  Cursor,
  CodeLine,
} from './styles';

const codeSnippets = {
  python: `def greet(name):\n  print(f"Hello, {name}!")\n\nnumbers = [1, 2, 3, 4, 5]\ndoubled = list(map(lambda x: x * 2, numbers))`,
  java: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n\n    int[] numbers = {1, 2, 3, 4, 5};\n    int[] doubled = java.util.Arrays.stream(numbers).map(x -> x * 2).toArray();\n  }\n}`,
  javascript: `function greet(name) {\n  console.log("Hello, " + name + "!");\n}\n\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(x => x * 2);`,
  csharp: `using System;\n\npublic class Program\n{\n  public static void Main(string[] args)\n  {\n    Console.WriteLine("Hello, World!");\n\n    int[] numbers = { 1, 2, 3, 4, 5 };\n    int[] doubled = Array.ConvertAll(numbers, x => x * 2);\n  }\n}`,
  cpp: `#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n  std::cout << "Hello, World!" << std::endl;\n\n  std::vector<int> numbers = {1, 2, 3, 4, 5};\n  std::vector<int> doubled;\n  std::transform(numbers.begin(), numbers.end(), std::back_inserter(doubled), [](int x){ return x * 2; });\n\n  return 0;\n}`,
  go: `package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, World!")\n\n  numbers := []int{1, 2, 3, 4, 5}\n  doubled := make([]int, len(numbers))\n  for i, num := range numbers {\n    doubled[i] = num * 2\n  }\n}`,
  ruby: `def greet(name)\n  puts "Hello, #{name}!"\nend\n\nnumbers = [1, 2, 3, 4, 5]\ndoubled = numbers.map { |x| x * 2 }`,
};
const languages = Object.keys(codeSnippets);

function AnimatedMonitor() {
  const screenRef = useRef(null);
  const [currentCode, setCurrentCode] = useState(codeSnippets.javascript);
  const [codeIndex, setCodeIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [typing, setTyping] = useState(false);
  const [displayedOnce, setDisplayedOnce] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (languages.indexOf(languages[codeIndex]) + 1) % languages.length;
      setCurrentCode(codeSnippets[languages[nextIndex]]);
      setCodeIndex(nextIndex);
      setDisplayedOnce(false);
    }, 10000);

    return () => clearInterval(interval);
  }, [codeIndex]);

  useEffect(() => {
    if (!displayedOnce) {
      setDisplayedCode("");
      setTyping(true);
    } else {
      setTyping(false);
    }
  }, [currentCode, displayedOnce]);

  useEffect(() => {
    let typingInterval;

    if (typing) {
      let charIndex = 0;
      typingInterval = setInterval(() => {
        if (charIndex < currentCode.length) {
          setDisplayedCode(currentCode.substring(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTyping(false);
          setDisplayedOnce(true);
        }
      }, 50);
    }

    return () => clearInterval(typingInterval);
  }, [currentCode, typing]);

  const renderCodeLines = () => {
    return displayedCode.split('\n').map((line, lineIndex) => (
      <CodeLine key={lineIndex}>
        {line}
        {lineIndex === displayedCode.split('\n').length - 1 && <Cursor />}
      </CodeLine>
    ));
  };

  return (
    <div>
    <MonitorContainer>
      <Glow />
      <Screen ref={screenRef}>
        {renderCodeLines()}
      </Screen>
      
    </MonitorContainer>
    <Body />
    <Stand>
      <StandBase />
    </Stand>
    </div>
  );
}

export default AnimatedMonitor;
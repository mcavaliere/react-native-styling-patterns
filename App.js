import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//  Styles for this screen/scene. In a multiple-screen app, we would have a folder
//  for all screens (/screens or /scenes), with one folder for each unique screen.
//  Within each folder there would be a component file, and a style file - the same
//  thing we have done for components in this repo.
import Styles from './App.styles';

// Components
import Accordion from './components/Accordion/Accordion';
import AccordionItem from './components/AccordionItem/AccordionItem';

export default class App extends React.Component {
  render() {
    return (
      <View>
	  	<Text>Accordion sample</Text>
        <Accordion>
			<AccordionItem title="Item 1">
                Quibusdam export aliquip pariatur quo aliqua iudicem non appellat ab fore ut ad
                malis vidisse, possumus fugiat aliqua se summis. E quid mandaremus si deserunt
                fugiat mentitum occaecat ad nisi litteris id pariatur a doctrina transferrem hic
                excepteur o de export commodo, consequat culpa appellat, quem est an enim
                singulis, laboris aliqua appellat.
			</AccordionItem>
            <AccordionItem title="Item 2">
                Te aliquip coniunctione iis tamen non
                cupidatat et anim nam nam culpa relinqueret, o elit incurreret expetendis, ut
                aliqua nostrud ab ipsum probant instituendarum ab enim eiusmod e fidelissimae ex
                veniam et arbitror a legam.Dolore officia o eram culpa id appellat cillum eram
                voluptate aute qui nam incididunt reprehenderit.
			</AccordionItem>
			<AccordionItem title="Item 3">
                Fore mentitum ita quibusdam id
                pariatur labore legam mandaremus eram hic se probant arbitrantur, labore nostrud
                relinqueret non quamquam a singulis. Quo ingeniis in iudicem, nescius illum ea
                vidisse graviterque, multos ab ullamco ea tempor, ubi fugiat ullamco
                voluptatibus. Iudicem velit tamen te fugiat. Expetendis a ullamco.
			</AccordionItem>

		</Accordion>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

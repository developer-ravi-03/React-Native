import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  const dummy = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      image:
        'https://plus.unsplash.com/premium_photo-1746637010097-5e79e6283d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@gmail.com',
      image:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice@gmail.com',
      image:
        'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 4,
      name: 'Bob Williams',
      email: 'bob@gmail.com',
      image:
        'https://images.unsplash.com/photo-1507120878965-6c3e1a1a0041?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 5,
      name: 'Charlie Davis',
      email: 'charlie@gmail.com',
      image:
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 6,
      name: 'Diana Evans',
      email: 'diana@gmail.com',
      image:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 7,
      name: 'Ethan Miller',
      email: 'ethan@gmail.com',
      image:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 8,
      name: 'Fiona Clark',
      email: 'fiona@gmail.com',
      image:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 9,
      name: 'George Lewis',
      email: 'george@gmail.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 10,
      name: 'Hannah Moore',
      email: 'hannah@gmail.com',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 11,
      name: 'Ian Scott',
      email: 'ian@gmail.com',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 12,
      name: 'Julia Adams',
      email: 'julia@gmail.com',
      image:
        'https://images.unsplash.com/photo-1603415526960-f7e0328eaf09?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 13,
      name: 'Kevin Lee',
      email: 'kevin@gmail.com',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 14,
      name: 'Laura Martin',
      email: 'laura@gmail.com',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 15,
      name: 'Mike Brown',
      email: 'mike@gmail.com',
      image:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 16,
      name: 'Nina White',
      email: 'nina@gmail.com',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 17,
      name: 'Olivia Perez',
      email: 'olivia@gmail.com',
      image:
        'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 18,
      name: 'Patrick Turner',
      email: 'patrick@gmail.com',
      image:
        'https://images.unsplash.com/photo-1546456073-6712f79251bb?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 19,
      name: 'Queenie Hall',
      email: 'queenie@gmail.com',
      image:
        'https://images.unsplash.com/photo-1518593922033-745c02f6333c?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 20,
      name: 'Ryan Cooper',
      email: 'ryan@gmail.com',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 21,
      name: 'Sophia Bennett',
      email: 'sophia@gmail.com',
      image:
        'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 22,
      name: 'Thomas Reed',
      email: 'thomas@gmail.com',
      image:
        'https://images.unsplash.com/photo-1502767089025-6572583495b4?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 23,
      name: 'Uma Patel',
      email: 'uma@gmail.com',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 24,
      name: 'Victor Young',
      email: 'victor@gmail.com',
      image:
        'https://images.unsplash.com/photo-1531891437562-4301cf35b7f4?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 25,
      name: 'Wendy Foster',
      email: 'wendy@gmail.com',
      image:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 26,
      name: 'Xavier Gray',
      email: 'xavier@gmail.com',
      image:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image
              style={{height: 40, width: 40, borderRadius: 50}}
              source={{
                uri: item.image,
              }}
            />

            <Text>{item.name}</Text>
            <Text>Email</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={{height: 10}} />}
        numColumns={2}
        columnWrapperStyle={{gap: 10}}
        // extraData={}  // for re-rendering the list when data changes
        // horizontal
      />

      {/* <View style={styles.card}>
        <Image
          style={{height: 40, width: 40, borderRadius: 50}}
          source={{
            uri: 'https://t3.ftcdn.net/jpg/05/15/63/82/360_F_515638234_Leo0UBEay0ozXWnObkkxLRNJXM9xhdWG.jpg',
          }}
        />

        <Text>Name</Text>
        <Text>Email</Text>
      </View> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#dadada',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { Button, XGroup, XStack, YStack } from "tamagui";

const Home = () => {
  return (
    <YStack space="$4">
      <YStack padding="$3" space="$3">
        <Button>Plain</Button>
        <XStack space="$2" justifyContent="center">
          <Button size="$3" theme="active">
            Active
          </Button>
          <Button size="$3" variant="outlined">
            Outlined
          </Button>
        </XStack>
        <XStack space="$2">
          <Button themeInverse size="$3">
            Inverse
          </Button>
        </XStack>
        <XGroup>
          <XGroup.Item>
            <Button width="50%" size="$2" disabled opacity={0.5}>
              disabled
            </Button>
          </XGroup.Item>

          <XGroup.Item>
            <Button width="50%" size="$2" chromeless>
              chromeless
            </Button>
          </XGroup.Item>
        </XGroup>
      </YStack>
    </YStack>
  );
};

export default Home;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class MainTest {

	private ByteArrayOutputStream stdoutBuffer;
	private PrintStream originalStdout;

	@Test
	public void shouldPrintHelloWorld() {
		Main.main(new String[] {});
		assertThat(stdoutBuffer.toString(), is(equalTo("Hello, world\n")));
	}

	@Before
	public void setUp() throws Exception {
		stdoutBuffer = new ByteArrayOutputStream();
		originalStdout = System.out;
		System.setOut(new PrintStream(stdoutBuffer));
	}

	@After
	public void tearDown() throws Exception {
		System.setOut(originalStdout);
	}

}
